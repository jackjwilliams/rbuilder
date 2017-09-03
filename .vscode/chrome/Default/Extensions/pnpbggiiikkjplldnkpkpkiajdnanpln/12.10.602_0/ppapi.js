function nativeOnMessage(message)
{
	var msg = JSON.parse(message.data);

	if (msg["responseId"] == "setobject") 
	{
		setContextProto(msg["response"]["proto"]);
		return;
	}

	var retVal = getIocm().invoke(msg["request"]);	
	if (retVal == null) 
		return;

	var response = { responseId: msg["requestId"], "response": retVal};
	getIocm().port.postMessage(response);
}

function nativePostMessage(message)
{
	var jsonString = JSON.stringify(message);
	getIocm().port.agent.postMessage(jsonString);
}

function createNativePlugin(tabId)
{
	var parentNode = document.documentElement;
	if (!parentNode)
		return;

	getIocm().context.tabId = tabId;
	var agent = document.createElement("EMBED");
	getIocm().port = {"postMessage": nativePostMessage, "agent": agent };

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
	agent.tabId = tabId;

	var beginComment = document.createComment(cTestCompleteBeginHiddenNodes);
	var endComment = document.createComment(cTestCompleteEndHiddenNodes);

	parentNode.appendChild(beginComment);
	parentNode.appendChild(endComment);
	parentNode.insertBefore(agent, endComment);

    	agent.addEventListener('message', nativeOnMessage, false);
};
