/**
 * Simple Bootstrap form validation
 * Dependent to bootstrap & jQuery
 * Created by Priatmoko
 * beta version
*/
$.fn.SBValidate = function() {
    var result = true;
    input = $(this.selector + ' [data-validate]');
    var msg ="";
    var focus="";
    vlp=input;
    if (vlp.length>0){
        for (i = 0; i < vlp.length; i++) {
            val = vlp.eq(i).data('validate').split('||');
            if (val.length > 0) {
                for (vi = 0; vi < val.length; vi++) {
                    if (val[vi] == "required") {
                        var re = new RegExp("^[a-zA-Z0-9!?@#$&()\\-`.+,/\"\' ]*$");
                        if (vlp.eq(i).val().replace(/\s/g, '') == "") {
                            vlp.eq(i).closest('.form-group').addClass('has-error');
                            vlp.eq(i).next('small').removeClass('no-display');
                            msg_="Form " + vlp.eq(i).data('name') + " is required!";
                            vlp.eq(i).next('small').html(msg_);
                            if (msg===""){msg=msg_;focus=i}
                            result=false;
                        }else if (re.test(vlp.eq(i).val().replace(/\s/g, ''))===false){
                            vlp.eq(i).closest('.form-group').addClass('has-error');
                            vlp.eq(i).next('small').removeClass('no-display');
                            msg_="Form " + vlp.eq(i).data('name') + " contains illegal character!";
                            vlp.eq(i).next('small').html(msg_);
                            if (msg===""){msg=msg_;focus=i}
                            result=false;
                        }else{
                            vlp.eq(i).closest('.form-group').removeClass('has-error');
                            vlp.eq(i).next('small').addClass('no-display');
                            vlp.eq(i).next('small').html("");
                        }
                    }else if (val[vi] == "numeric"){
                        if (vlp.eq(i).val().replace(/\s/g, '') != "" && !$.isNumeric(vlp.eq(i).val().replace(/,/g, ''))) {
                            vlp.eq(i).closest('.form-group').addClass('has-error');
                            vlp.eq(i).next('small').removeClass('no-display');
                            msg_="Form " + vlp.eq(i).data('name') + " accepts numeric input only!";
                            vlp.eq(i).next('small').html(msg_);
                            if (msg==="") {msg=msg_;focus=i}
                            result=false;
                        }else if (vlp.eq(i).val().replace(/\s/g, '') != "" && $.isNumeric(vlp.eq(i).val().replace(/,/g, ''))){
                            vlp.eq(i).closest('.form-group').removeClass('has-error');
                            vlp.eq(i).next('small').addClass('no-display');
                            vlp.eq(i).next('small').html("");
                        }
                    }
                }
            } 
        }
    }
    if (msg!==""){
        alert(msg);
        vlp.eq(focus).focus();
        result=false;
    }
    return result;
}