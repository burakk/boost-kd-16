export function Page01(){
    return (
        <section>
        <h1>Jsx yazmak</h1>
        <p>Tarayıclar jsx okuyamazlar, jsx kodu js koduna çevrilmelidir.</p>
        <ul>
          <li>Tek bir root jsx elemanı döndürülmelidir.Komşu jsx elemanları onları saran bir tek eleman içerine konmalı. Bu elaman fragment da olabilir.</li>
          <li>
            Her jsx elemanı kaptılmalıdır. 
          </li>
          <li>
            Jsx eleman özelliklerinin neredeyse tamamı camel case yazılır.
          </li>
        </ul>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/220px-Albert_Einstein_1947.jpg" alt="Alber Einstein" className="avatar" />
      </section>
    );
}