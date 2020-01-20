/* General Valid Form */
const translateObject = {

    'tr': {
        'NameAlert':'En Az 2 Karakter',
        'SurnameAlert':'En Az 2 Karakter',
        'PhoneAlert':'Hatalı Format',
        'EmailAlert':'Hatalı Format',
        'Min10Character':'En Az 10 Karakter',
        'MessageAlert':'En Az 10 Karakter',
        'MessageCharacterOutAlert':'En Fazla 2000 Karakter'
    },
    'en':{
        'NameAlert':'En Az 2 Karakter',
        'SurnameAlert':'En Az 2 Karakter',
        'PhoneAlert':'Hatalı Format',
        'EmailAlert':'Hatalı Format',
        'Min10Character':'En Az 10 Karakter',
        'MessageAlert':'En Az 10 Karakter',
        'MessageCharacterOutAlert':'En Fazla 2000 Karakter'
    }
};

class Translation {
    static translate(language, translationKey){
        if(translateObject.hasOwnProperty(language)){

            if(translateObject[language].hasOwnProperty(translationKey)){
                return translateObject[language][translationKey];
            }
            return "";
        }
        return "";
    }
}
/* Translation */

/* General Valid Form */
class GeneralValidForm {

    constructor(){}

    sendGeneralValidForm(){}

    setGeneralValidFormErrorMessages(inputIdSelector, inputErrorMessage, inputAddErrorMessageClass, inputRemoveErrorMessageClass){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorMessageText.classList.add(inputAddErrorMessageClass);
        ErrorMessageText.classList.remove(inputRemoveErrorMessageClass);
    }
    setGeneralValidFormErrorInput(inputIdSelector){
        let ErrorInputClass = document.getElementById(inputIdSelector);
    }
    setGeneralValidFormErrorIcon(inputIdSelector, inputAddErrorIcon, inputRemoveErrorIcon){
        let ErrorIconClass = document.getElementById(inputIdSelector);
        ErrorIconClass.classList.add(inputAddErrorIcon);
        ErrorIconClass.classList.remove(inputRemoveErrorIcon);
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let phonePatternGsm = /^\(5\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // GSM Phone Pattern
        let phonePatternAll = /^\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // ALL Phone Pattern
        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);

        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputNameProcess":
                if(val.length < 2){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','NameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSurnameProcess":
                if(val.length < 2){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','SurnameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.replace(/\s/g, "").length < 11){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PhoneAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','EmailAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMin10CharacterProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','Min10Character'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMessageProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else if(val.length >= 2000){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageCharacterOutAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector,"", "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check", "error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);
        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputNameProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','NameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSurameProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','SurnameAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error", "check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','PhoneAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','EmailAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMin10CharacterProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','Min10Character'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr',''), "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check","error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;

            case "inputMessageProcess":
                if(val.length < 10){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else if(val.length >= 2000){
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr','MessageCharacterOutAlert'), "error", "check");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"error","check");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }else{
                    this.setGeneralValidFormErrorMessages(messageSpanSelector, Translation.translate('tr',''), "check", "error");
                    this.setGeneralValidFormErrorIcon(messageIconSelector,"check","error");
                    this.setGeneralValidFormErrorInput(inputIdSelector);
                }
                break;
        }
    }
}

window.generalvalidform = new GeneralValidForm();
/* General Valid Form */