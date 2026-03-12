function openLightbox(img){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();


let params = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
date: document.getElementById("date").value,
time: document.getElementById("time").value,
service: document.getElementById("service").value,
message: document.getElementById("message").value,
to_email: "keerthi28825@gmail.com"
};

emailjs.send("service_bpx5y37","template_wui6kja",params)

.then(function(){

alert("Booking sent successfully!");
form.reset();

})

.catch(function(error){

console.log("EmailJS Error:", error);
alert("Failed to send booking");

});

function toggleMenu(){

let menu = document.getElementById("navMenu");

menu.classList.toggle("active");

}

});

}

// document.getElementById("bookingForm")
// .addEventListener("submit",function(e){

// e.preventDefault()

// const name=document.getElementById("name").value
// const phone=document.getElementById("phone").value
// const date=document.getElementById("date").value
// let time=document.getElementById("timeSlot").value
// const details=document.getElementById("details").value


// alert("Your booking request for "+date+" at "+time+" has been sent!")

// let bookings=JSON.parse(localStorage.getItem("bookings")) || []

// bookings.push({name,phone,date,details})

// localStorage.setItem("bookings",JSON.stringify(bookings))

// alert("Booking submitted!")

// this.reset()

// flatpickr("#dateTime", {
// enableTime: true,
// dateFormat: "F j, Y h:i K",
// minDate: "today"
// });

// })
// 
