const d = document,
w = window;
export function voiceSynth(ev){
  const utterance = new SpeechSynthesisUtterance;
  const $voiceOptions = d.getElementById("voice-list")
  const $voiceStartBtn = d.getElementById("voice-synth-start")
  const $voiceText = d.getElementById("speech")

  w.speechSynthesis.addEventListener("voiceschanged", _ => {
    const voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const $option = d.createElement("option");
      $option.value = voice.name;
      $option.textContent = voice.name;
      $voiceOptions.insertAdjacentElement("beforeend", $option)
    });
    
    $voiceStartBtn.addEventListener("click", (ev) => {
      if($voiceText.value === ""){
        $voiceText.setAttribute("placeholder", "Recuerda poner un mensaje")
      };
      
      utterance.text = $voiceText.value;
      utterance.voice = voices[$voiceOptions.selectedIndex];
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    })
  })
}