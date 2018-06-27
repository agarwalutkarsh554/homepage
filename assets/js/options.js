// Saves options to chrome.storage
function save_options() {
  var custombg = document.getElementById('custombg').value;
  var engines = document.getElementById('engines').value;
  var wkey = document.getElementById('wkey').value;
  var tempc = document.getElementById('tempc').checked;

  chrome.storage.local.set({
    custombg: custombg,
    engines: engines,
    wkey: wkey,
    tempc: tempc
  }, function() {
    // Update status to let user know options were saved.
    var modal = document.getElementById('modal');
    var modaltarget = document.getElementsByClassName('modal')[0];
    modal.style.display = "block";
    modaltarget.classList.remove('modal--close');
    setTimeout(function() {
      modaltarget.classList.add('modal--close');
      setTimeout(function() { modal.style.display = "none"; }, 570);
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    custombg: "",
    engines: "google",
    wkey: "",
    tempc: true
  }, function(items) {
    document.getElementById('custombg').value = items.custombg;
    document.getElementById('engines').value = items.engines;
    document.getElementById('wkey').value = items.wkey;
    document.getElementById('tempc').checked = items.tempc;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
