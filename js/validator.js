//Đối tượng 'Validator'
function Validator(options) {
    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement
            //Cái element đầu tiên thì chỉ là thẻ input, nhưng cái element thứ 2 là cái
            //thẻ div , nó sẽ cứ gán dần lên như vậy đến khi nào chạm đến thẻ cha .input_item

        }
    }
    var selectorRules = {};
    //Hàm thực hiện validate
    function validator(inputElement, rule) {
        var errorMessage
        var errorElement =getParent(inputElement,options.inputItemSelector).querySelector(options.errorSelector)

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        //Lặp qua từng rule & kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement,options.inputItemSelector).classList.add('invalid')
        } else {
            errorElement.innerText = '';
            getParent(inputElement,options.inputItemSelector).classList.remove('invalid')

        }
        return !errorMessage //cho thêm !! thì nó sẽ trả về kiểu boolean là true hoặc false
    }
    //lấy elemtn của form cần validaye
    var formElement = document.querySelector(options.form)
    if (formElement) {
        //Khi submitform
        formElement.onsubmit = function (e) {
            e.preventDefault(); //bỏ hành động mặc định của form

            var isFormValid = true;

            //Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validator(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            });

            
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var EnableInputs = formElement.querySelectorAll('[name])')
                    var formValues = Array.from(EnableInputs).reduce(function (values, input) {
                        values[input.name] = input.value
                        return values;
                    }, {});
                    //Vì cái EnableInputs đang là NodeList mà NodeList không có tính chất của Array nên phải convert sang

                    options.onSubmit(formValues)
                }
                else{
                    formElement.submit();
                }
            }
        }
        //lặp qua mỗi rule và xử lý (lắng nghe sự kiện )
        options.rules.forEach(function (rule) {
            //Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {//nếu là mảng
                selectorRules[rule.selector].push(rule.test)
            }
            else {//nếu không phải mảng
                //Nếu phần tử nào chạy qua đây đến 2 lần trở lênthì lần thứ 2 sẽ lọt vào 
                //cái if phía trên vì cái trước nó đã là cái mảng rồi
                selectorRules[rule.selector] = [rule.test];// gán bằng cái rule đầu tiên
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                //xử lý trường hợ blur khỏi input
                inputElement.onblur = function () {
                    validator(inputElement, rule)
                }
                //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement,options.inputItemSelector).querySelector('.form-message')

                    errorElement.innerText = '';
                    getParent(inputElement,options.inputItemSelector).classList.remove('invalid')

                }
            }
        })
    }
}
//Định nghĩa các rules ( luật lệ)
//Nguyễn tắc của các rules :
//1. Khi có lỗi => Trả ra mess lỗis
//2.Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {// điều luật bắt buộc
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined :message
            //trim()là loại bỏ các khoảng cách

        }
    };
}
Validator.isEmail = function (selector, message) {//điều luật phải là email
    //để check email thì search javascript email regex sẽ được đoạn mã
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message 
        }
    };
}
Validator.minLength = function (selector, min, message) {//điều luật phải là email
    //để check email thì search javascript email regex sẽ được đoạn mã
    return {
        selector: selector,
        test: function (value) {

            return value.length >= min ? undefined : message 
        }
    };
}
Validator.isConfimed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message 
        }
    }
}