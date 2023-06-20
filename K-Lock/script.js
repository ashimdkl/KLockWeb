const main = document.getElementById("main");
const title = document.getElementById("title");
const LockDataLink = "https://script.google.com/macros/s/AKfycbztA8aCByfNj6ek8HcI6J8_w_GdDt3O44k_XBo-mrd-LzNHGp1zfxUbm0ETClDPNzbCDA/exec"
var lockID;

function initializeHTML(newLockID) {
  lockID = newLockID;
  title.innerHTML = "Your order is ready at space " + lockID + "!";
  
}

function switchState(state) {
  const lockIDInput = document.getElementById("lockIDInput");
  if (lockIDInput != null) {
    lockID = lockIDInput.value;
  }
  $.ajax({
  		url: LockDataLink,
  		method: "POST",
  		dataType: "json",
  		data: {
        LockID: lockID,
        State: state
      },
  		success: function(response) {
  			if(response.result == "success") {
          
  				return true;
  			}
  			else {
  				console.log(response.error);
  			}
  		},
  		error: function() {
  			console.log("Error");
  		}
  	});
}