//Sync with contentscript.js.h
cTestCompleteChromeBrowserAgentMimeType = "application/x-testcomplete12-0-chrome-browser-agent";
cTestCompleteChromeBrowserAgentScriptHelper = "g_TestCompleteChromeBrowserAgentScriptHelper12_0";
cTestCompleteBeginHiddenNodes = "TestCompleteHiddenNodes{{"
cTestCompleteEndHiddenNodes = "}}TestCompleteHiddenNodes"
cTestCompleteHiddenNodeAttributeName = "isTestCompleteHiddenNode";
cTestCompleteTabIdAttributeName = "tabId";

//Sync with background.js
cGetTabIdRequest = "getTabId";

cTestCompleteChromeBrowserAgent = "NATIVE_" + cTestCompleteChromeBrowserAgentScriptHelper;
cTestCompleteChromeBrowserScript = "SCRIPT_" + cTestCompleteChromeBrowserAgentScriptHelper;

function addHiddenNodeAttribute(node)
{
    var attr = document.createAttribute(cTestCompleteHiddenNodeAttributeName);
    attr.value = "1";
    node.attributes.setNamedItem(attr);
}

function injectBrowserAgent(parentNode, tabId)
{
    var beginComment = document.createComment(cTestCompleteBeginHiddenNodes);
    var endComment = document.createComment(cTestCompleteEndHiddenNodes);
    var agent = document.createElement("OBJECT");
    agent.type = cTestCompleteChromeBrowserAgentMimeType;
    agent.id = cTestCompleteChromeBrowserAgent;
    agent.style.position = "absolute";
    agent.style.visibility = "hidden";
    agent.style.left = "0px";
    agent.style.top = "0px";
    agent.style.width = "1px";
    agent.style.height = "1px";
    addHiddenNodeAttribute(agent);

    var tabIdAttr = document.createAttribute(cTestCompleteTabIdAttributeName);
    tabIdAttr.value = tabId;
    agent.attributes.setNamedItem(tabIdAttr);

    var script = document.createElement("SCRIPT");
    script.setAttribute("id", cTestCompleteChromeBrowserScript);
    script.text = "var " + cTestCompleteChromeBrowserAgentScriptHelper + " = {};\n" +
    cTestCompleteChromeBrowserAgentScriptHelper + ".addScriptToAgent = function(agent)\n" + 
    "{\n" + 
    "    agent.createCallback0 = \n" +
    "        function(cookie0, cookie1)\n" +
    "        {\n" +
	"            var callback = function()\n" +
	"            {\n" +
	"	            agent.callback0(cookie0, cookie1);\n" +
	"            }\n" +
	"            return callback;\n" +
    "        }\n" +
    "}\n" +
    cTestCompleteChromeBrowserAgentScriptHelper + ".removeScriptFromAgent = function(agent)\n" + 
    "{\n" + 
    "    agent.createCallback0 = null;\n" + 
    "}\n" + 
    cTestCompleteChromeBrowserAgentScriptHelper + ".addCustomScript = function(text)\n" + 
    "{\n" + 
    "    var script = document.createElement('SCRIPT');\n" + 
    "    script.text = text;\n" +
    "    var attr = document.createAttribute('"+ cTestCompleteHiddenNodeAttributeName + "');\n" +
    "    attr.value = '1';\n" + 
    "    script.attributes.setNamedItem(attr);\n" +
    "    var elem = document.getElementById('" + cTestCompleteChromeBrowserScript + "');\n" + 
    "    if (elem)\n" +
    "    {\n" +
    "        elem.parentNode.insertBefore(script, elem);\n" +
    "        return true;\n" +
    "    }\n" + 
    "    return false;\n" +
    "}\n"; 
    addHiddenNodeAttribute(script);

    // ADX0176157
    // {
    var wmodeParam = document.createElement("PARAM");
    wmodeParam.id = "TC_HIDDEN_PARAM_0";
    wmodeParam.name = "wmode";
    wmodeParam.value = "opaque";
    addHiddenNodeAttribute(wmodeParam);
    agent.appendChild(wmodeParam);
    // }

    parentNode.appendChild(beginComment);
    parentNode.appendChild(endComment);
    parentNode.insertBefore(script, endComment);
    parentNode.insertBefore(agent, endComment);
}

function tryRemoveBrowserAgent(parentNode)
{
    if (parentNode.firstElementChild)
    {
        var curr = parentNode.firstElementChild;
        while(curr)
        {
            if (curr.id == cTestCompleteChromeBrowserAgent)
            {
                parentNode.removeChild(curr);
                return true;
            }
            curr = curr.nextElementSibling;
        }
    }
    return false;
}

function getBrowserAgentParentNode()
{
    return document.documentElement;
}

//consts
var g_InitialInjectCallINTERVAL = 150;
var g_InitialInjectCallCountMAX = 15;
var g_RepairInjectCallINTERVAL = 500;

var g_InitialInjectDone = false;
var g_InitialInject = null;

var g_RepairInjectDone = true;
var g_RepairInject = null;

function tryInitialInjectBrowserAgent(tabId)
{
    if (tabId === undefined) //ADX0228415
        return;

    if (g_InitialInjectDone)
        return;

    var parentNode = getBrowserAgentParentNode();
    if (!parentNode)
        return;

    g_InitialInjectDone = true;
    injectBrowserAgent(parentNode, tabId);

    // ADX0182673
    // {
    var tryRepairInjectBrowserAgent = function()
    {
        if (g_RepairInjectDone)
            return;

        var parentNode = getBrowserAgentParentNode();
        if (!parentNode)
            return;

        g_RepairInjectDone = true;
        injectBrowserAgent(parentNode, tabId);
    }
    var observer =
        new WebKitMutationObserver
        (
        function(mutations)
        {
            mutations.forEach
            (
            function(mutation)
            {
                for (var i = 0; i < mutation.removedNodes.length; i++)
                {
                    var removedNode = mutation.removedNodes[i];
                    if (tryRemoveBrowserAgent(mutation.removedNodes[i]))
                    {
                        g_RepairInjectDone = false;
                        if (removedNode !== getBrowserAgentParentNode())
                            setTimeout(tryRepairInjectBrowserAgent, 1);

                        if (!g_RepairInject)
                            g_RepairInject = setInterval(tryRepairInjectBrowserAgent, g_RepairInjectCallINTERVAL);

                        break;
                    }
                }
            }
            );
        }
        );
    observer.observe(document, { childList: true } );
    // }
}

var g_InitialInjectCallCount = 0;
function asyncTryInitialInjectBrowserAgent()
{
    var stop = false;
    if (g_InitialInjectCallCount >= g_InitialInjectCallCountMAX)
        stop = true;
    else if (g_InitialInjectDone)
        stop = true;
    
    if (stop)
        clearInterval(g_InitialInject);
    else
    {
        chrome.extension.sendRequest
        (
            cGetTabIdRequest,
            tryInitialInjectBrowserAgent
        );
    }
    
    g_InitialInjectCallCount++;
}
g_InitialInject = setInterval(asyncTryInitialInjectBrowserAgent, g_InitialInjectCallINTERVAL);
