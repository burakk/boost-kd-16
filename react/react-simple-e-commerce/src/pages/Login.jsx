export function Login() {
    return (
        <>
            <h3>Giriş Yap</h3>
            <form>
                <input type="text" name="name" id="name" placeholder="Adınızı giriniz"/>
                <input type="email" name="email" id="email" placeholder="Epostanızı giriniz"/>
                <input type="password" name="password" id="password" placeholder="Şifrenizi giriniz"/>

                <button>
                    gönder
                </button>
            </form>
        </>
    )
}