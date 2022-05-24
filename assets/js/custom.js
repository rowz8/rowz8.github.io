function check(form)
{

    if(form.username.value == "Roseindia" && form.password.value == "Roseindia")
    {
        return true;
    }
    else
    {
        alert("Error Password or Username")
        return false;
    }
}
