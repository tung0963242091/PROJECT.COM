function btnSend_onclick() {
    if (test_empty(document.frmCart.txtName.value)) {
        alert('Please enter a name');
        document.frmCart.txtName.focus();
        return false;
    }
    if (test_empty(document.frmCart.txtAddress.value)) {
        alert('Please enter the address');
        document.frmCart.txtAddress.focus();
        return false;
    }

    if (test_empty(document.frmCart.txtMobile.value)) {
        alert('Please enter the phone number');
        document.frmCart.txtMobile.focus();
        return false;
    }

    if (test_empty(document.frmCart.txtEmail.value)) {
        alert('Please enter your mailbox');
        document.frmCart.txtEmail.focus();
        return false;
    }
    if (!checkEmail(document.frmCart.txtEmail.value)) {
        alert('Your email is not correct');
        document.frmCart.txtEmail.focus();
        return false;
    }


    if (document.getElementById("radiobuttonkhac").checked) {

        if (test_empty(document.frmCart.txtName1.value)) {
            alert('Please enter a name');
            document.frmCart.txtName1.focus();
            return false;
        }
        if (test_empty(document.frmCart.txtAddress1.value)) {
            alert('Please enter the address');
            document.frmCart.txtAddress1.focus();
            return false;
        }

        if (test_empty(document.frmCart.txtMobile1.value)) {
            alert('Please enter the phone number');
            document.frmCart.txtMobile1.focus();
            return false;
        }

        if (test_empty(document.frmCart.txtEmail1.value)) {
            alert('Please enter your mailbox');
            document.frmCart.txtEmail1.focus();
            return false;
        }
        if (!checkEmail(document.frmCart.txtEmail1.value)) {
            alert('Your email is not correct');
            document.frmCart.txtEmail1.focus();
            return false;
        }
    }


    return true;
}

function radioResult(id) {
    if (id == '0') {
        document.getElementById('idkhac').style.display = 'none';
    } else {
        document.getElementById('idkhac').style.display = '';
    }
}

function showCity(idcity, idload, namess) {

    var domain = $(location).attr('host');
    var xmlhttpcity;
    if (idcity == "") {
        document.getElementById(idload).innerHTML = '<div align="center" style="width:100%"><img src="../images/loading-large_boxed._V192195297_.gif" /></div>';
        return;
    }
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttpcity = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttpcity = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttpcity.onreadystatechange = function () {
        if (xmlhttpcity.readyState == 4 && xmlhttpcity.status == 200) {
            if (xmlhttpcity.responseText == 0) {
                document.getElementById(idload).style.display = 'none';
            } else {
                document.getElementById(idload).style.display = '';
                document.getElementById(idload).innerHTML = xmlhttpcity.responseText;
            }

        }
    }

    xmlhttpcity.open("GET", servername + "database/district_ajax.php?idcity=" + idcity + '&idload=' + idload + '&namess=' + namess, true);
    xmlhttpcity.send();
}