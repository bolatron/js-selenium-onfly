function valida_todos_campos(data) {
    return validateFullName(data['name']) 
        && validatePhone(data['phone_number'])
        && validateEmail(data['email'])
        && validateCep(data['endereco']['cep'])
        && validateAddress(data['endereco']['logradouro'])
        && validateCardNumber(data['credit_card']['number'])
        && validateExpirationDate(data['credit_card']['expiration'])
        && validateCvv(data['credit_card']['cvv']);
}


function validateFullName(fullName) {
    let names = fullName.split(' ')

    if (names.length < 2) {
        return false
    }

    for (const name of names) {
        if (!name.match(/^[a-zA-ZÁáÂâÃãÉéÊêẼẽÍíĨĩÎîÓóÕõÔûÚúŨũÛû'.]+$/g)) {
            return false
        }
    }

    return true
}


function validatePhone(phone) {
    phone = phone.match(/[\d]/g).join('')
    if (phone.length < 10) {
        return false
    }
    return true
}


function validateEmail(email) {
    return email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/) != null
}


function validateCep(cep) {
    cep = cep.match(/[\d]/g)
    return cep.length == 8
}


function validateAddress(address) {
    return address.length >= 2
}


function validateCardNumber(cardNumber) {
    cardNumber = cardNumber.match(/[\d]/g)
    return cardNumber.length == 16
}


function validateExpirationDate(expDate) {
    if(expDate.match(/^[\d]{2}\/[\d]{4}$/g) == null) {
        return false
    }

    // Check if date is in the future
    let [month, year] = expDate.split('/')

    if (month > '12') {
        return false
    }

    let currentMonth = new Date().getMonth() + 1
    let currentYear = new Date().getFullYear()

    if (year < currentYear || year > currentYear + 20) {
        return false
    }

    if (year == currentYear) {
        return month >= currentMonth
    }

    return true
}


function validateCvv(cvv) {
    if (cvv.match(/[^\d]/g) != null) {
        return false
    }

    return cvv.length == 3
}

module.exports = { valida_todos_campos };