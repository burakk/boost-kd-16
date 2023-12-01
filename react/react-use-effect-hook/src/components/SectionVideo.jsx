import { useRef, useState, useEffect } from "react"

export function SectionVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [textVal, setTextVal] = useState("");

    function handleClick() {
        setIsPlaying(!isPlaying);
    }
    return (
        <div style={{ border: "2px dotted pink" }}>
            <button onClick={handleClick}> {isPlaying ? "duraklat" : "oynat"}</button>
            <h3>Video Bölümü</h3>
            <VideoPlayer isPlaying={isPlaying} />
            <input type="text" value={textVal} onChange={(e) => { setTextVal(e.target.value) }} placeholder="Bir şey yazınız" />
        </div>
    )


}

function VideoPlayer({ isPlaying }) {
    const videoRef = useRef(null); //{ current:null}

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        console.log("effect callback çalışıyor ");
    }, [isPlaying])
    /*
     isPlaying true video'ya ulaşıp play metodunu kullan
     isPlaying false ise video'ya ulaşıp pause metodunu kullan

     video ulaşmak için dom metodu kullanma

     useRef kullan
     videoRef.current 
    */

    return (
        <video ref={videoRef} style={{ width: 200 }} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
    )
}