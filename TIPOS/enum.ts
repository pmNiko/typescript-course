(() => {
  /**
   * Las enumeraciones se utilizan para enumerar valores númericos.
   */
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currentAudio = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
