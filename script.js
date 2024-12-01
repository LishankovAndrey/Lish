function get_year() {
    let now = new Date();
    let Date_Year = now.getFullYear(); 
    let q = document.getElementById('Python_code_id_6'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Year"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + Date_Year + '</p> <p class="Python_code_p_white"> , </p>';
}

function get_month() {
    let now = new Date();
    let monthIndex = now.getMonth(); 
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthName = months[monthIndex]; 
    let q = document.getElementById('Python_code_id_7'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Month"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + monthName + '</p> <p class="Python_code_p_white"> , </p>';
}

function get_day() {
    let now = new Date();
    let Date_Month = now.getDate(); 
    let q = document.getElementById('Python_code_id_8'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Day"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + Date_Month + '</p> <p class="Python_code_p_white"> , </p>';
}

function get_hour() {
    let now = new Date();
    let Date_Hour = now.getHours(); 
    let q = document.getElementById('Python_code_id_9'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Hour"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + Date_Hour + '</p> <p class="Python_code_p_white"> , </p>';
}

function get_minute() {
    let now = new Date();
    let Date_Minute = now.getMinutes(); 
    let q = document.getElementById('Python_code_id_10'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Minute"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + Date_Minute + '</p> <p class="Python_code_p_white"> , </p>';
}

function get_second() {
    let now = new Date();
    let Date_Second = now.getSeconds(); 
    let q = document.getElementById('Python_code_id_11'); 
    q.innerHTML = '<p class="Python_code_p_orange">"Second"</p> <p class="Python_code_p_white">:</p> <p class="Python_code_p_white">' + Date_Second + '</p> <p class="Python_code_p_white"> , </p>';
}


function update_time() {
    get_year(); 
    get_month();
    get_day();
    get_hour();
    get_minute();
    get_second();
}

update_time(); 

setInterval(update_time, 1000);
