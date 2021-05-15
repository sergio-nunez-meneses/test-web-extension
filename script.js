var btn       = getBy('id', 'extensionButton'),
    isEnabled = false;

function getBy(attribute, value) {
	if (attribute === 'id') {
		return document.getElementById(value);
	}
	else if (attribute === 'class') {
		return document.getElementsByClassName(value);
	}
	else if (attribute === 'name') {
		return document.getElementsByName(value);
	}
	else if (attribute === 'tag') {
		return document.getElementsByTagName(value);
	}
	else if (attribute === 'all') {
		return document.querySelectorAll(value);
	}
	else if (attribute === 'query') {
		return document.querySelector(value);
	}
}

function onOffExtension() {
	if (isEnabled) {
		isEnabled     = false;
		btn.innerHTML = 'Enable extension';
	}
	else {
		isEnabled     = true;
		btn.innerHTML = 'Extension enabled';
	}
}

function removeUnwantedElements(e) {
	if (isEnabled) {
		let target     = e.target,
		    targetName = target.nodeName,
		    parentName = target.parentNode.nodeName,
		    blockedElements = ['HTML', 'BODY', btn.id];

		if (blockedElements.includes(target.id)
				|| blockedElements.includes(targetName)
				|| blockedElements.includes(parentName)) {
			return;
		}
		else {
			let confirmRemove = confirm('Do you want to remove this element?');

			if (confirmRemove) {
				console.log(target, target.parentNode, e);
				target.remove();
			}
		}
	}
}

btn.addEventListener('click', onOffExtension);
window.addEventListener('click', removeUnwantedElements);