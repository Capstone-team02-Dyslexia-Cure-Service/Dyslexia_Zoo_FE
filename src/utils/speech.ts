export const speech = (text: string) => {
  let voices: SpeechSynthesisVoice[] = [];

  //디바이스에 내장된 voice를 가져온다.
  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }

  const speech = (text: string) => {
    const lang = "ko-KR";
    const utterThis = new SpeechSynthesisUtterance(text);

    utterThis.rate = 1;
    utterThis.volume = 3;
    utterThis.lang = lang;

    const kor_voice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
    );

    if (kor_voice) {
      utterThis.voice = kor_voice;
    } else {
      return;
    }

    window.speechSynthesis.speak(utterThis);
  };

  speech(text);
};
