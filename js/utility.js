function showElement(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}

function hideElement(elementId){
    document.getElementById(elementId).classList.add('hidden');
}

function setBackgroundColorById(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400');
}