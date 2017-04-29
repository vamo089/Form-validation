	document.getElementById("name").addEventListener("keyup", validation_name);
	document.getElementById("email").addEventListener("keyup", validation_email);
	document.getElementById("select").addEventListener("click", validation_select);
	document.getElementById("checkbox").addEventListener("click", validation_checkbox);


	function validation_email() {
	    var setreg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	    var form = document.forms.form;
	    var input_name = form.email;
	    var id = this.parentNode;
	    validation(setreg, input_name, id);
	}

	function validation_name() {
	    var setreg = /^[a-zA-Zа-яёА-ЯЁ -]+$/;
	    var form = document.forms.form;
	    var input_name = form.name;
	    var id = this.parentNode;
	    validation(setreg, input_name, id);
	}

	function validation(setreg, input_name, id) {
	    if (input_name.value !== "") {
	        id.getElementsByClassName('input-clear')[0].classList.add('visible');
	        id.getElementsByClassName('input-clear')[0].onclick = function() {
	            clear_notification(id);
	            remove_placeholder(id);
	            input_name.value = '';
	            input_name.focus();
	            id.getElementsByClassName('input-clear')[0].classList.remove('visible');
	        }
	        add_placeholder(id);
	        setreg.test(input_name.value) == true ? remove_error(id) : add_error(id);
	    } else {
	        clear_notification(id);
	    }
	}

	function submit_form() {
	    if (form.name.value == "" || form.email.value == "" || form.select.selectedIndex == 0 || form.checkbox.checked == false) {

	        form.name.value == "" ? add_error(form.name.parentNode) : false

	        form.email.value == "" ? add_error(form.email.parentNode) : false

	        form.select.selectedIndex == 0 ? add_error(form.select.parentNode) : false

	        form.checkbox.checked == false ? add_error(form.checkbox.parentNode) : false
	        
	        return false
	    }
	}

	function validation_select() {
	    form.select.selectedIndex > 0 ? remove_error(form.select.parentNode) : false
	}

	function validation_checkbox() {
	    form.checkbox.checked === true ? remove_error(form.checkbox.parentNode) : add_error(form.checkbox.parentNode)
	}


	function add_placeholder(id) {
	    id.getElementsByClassName('input-placeholder')[0].classList.add('input-placeholder-little');
	}

	function remove_placeholder(id) {
	    id.getElementsByClassName('input-placeholder')[0].classList.remove('input-placeholder-little');
	}

	function add_error(id) {
	    clear_notification(id);
	    id.classList.add('error');
	}

	function remove_error(id) {
	    clear_notification(id);
	    id.classList.add('verity');
	}

	function clear_notification(id) {
	    id.classList.remove('error');
	    id.classList.remove('verity');
	}