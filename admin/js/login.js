$(function () {
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: BigNew.user_login,
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                $('.login_form input[name]').each(function (index, ele) {
                    if (!$.trim($(ele).val())) {
                        flag = true
                    }
                })
                if (flag) {
                    $('.modal-body').text('用户名或密码不能为空')
                    $('#myModal').modal()
                    return false
                }

            },
            success: function (res) {
                // console.log(res);               
                $('.modal-body').text(res.msg)
                $('#myModal').modal()
                if (res.code === 200) {
                    $('.modal').on('hidden.bs.modal', function () {
                        window.localStorage.setItem('token',res.token)
                        window.location.href='./index.html'
                    })

                }

            }

        })
    })
})