var settingsState = new State("SettingsState", "settingsState");

settingsState.setImageBackground(sampleBackgrounds, 1);

settingsMasterVolumeSlider = document.getElementById("masterVolumeSlider");
masterVolume = document.getElementById("masterVolume");

settingsBackgroundMusicVolumeSlider = document.getElementById("musicVolumeSlider");
backgroundMusicVolume = document.getElementById("backgroundMusicVolume");
settingsBackgroundMusicVolumeMuteBox = document.getElementById("musicVolumeMuteBox");

settingsCharacterVoiceVolumeSlider = document.getElementById("characterVoiceVolumeSlider");
characterVoiceVolume = document.getElementById("characterVoiceVolume");
settingsCharacterVoiceVolumeMuteBox = document.getElementById("characterVoiceVolumeMuteBox");

settingsSoundEffectsVolumeSlider = document.getElementById("soundEffectsVolumeSlider");
soundEffectsVolume = document.getElementById("soundEffectsVolume");
settingsSoundEffectsVolumeMuteBox = document.getElementById("soundEffectsVolumeMuteBox");

settingsMasterVolumeSlider.oninput = () => {

    updateBackgroundMusicMainVolume(settingsMasterVolumeSlider.value, settingsBackgroundMusicVolumeSlider.value);
    updateSoundEffectsPlayerMainVolume(settingsMasterVolumeSlider.value, settingsSoundEffectsVolumeSlider.value);
    updateCharacterVoiceLineMainVolume(settingsMasterVolumeSlider.value, settingsCharacterVoiceVolumeSlider.value);
    masterVolume.innerHTML = settingsMasterVolumeSlider.value;

}

settingsBackgroundMusicVolumeSlider.oninput = () => {

    updateBackgroundMusicVolume(settingsBackgroundMusicVolumeSlider.value);
    backgroundMusicVolume.innerHTML = settingsBackgroundMusicVolumeSlider.value;

}

settingsSoundEffectsVolumeSlider.oninput = () => {

    updateSoundEffectsPlayerVolume(settingsSoundEffectsVolumeSlider.value);
    soundEffectsVolume.innerHTML = settingsSoundEffectsVolumeSlider.value;

}

settingsCharacterVoiceVolumeSlider.oninput = () => {

    updateCharacterVoiceLineVolume(settingsCharacterVoiceVolumeSlider.value);
    characterVoiceVolume.innerHTML = settingsCharacterVoiceVolumeSlider.value;

}

settingsBackgroundMusicVolumeMuteBox.onchange = () => {

    if(settingsBackgroundMusicVolumeMuteBox.checked){

        muteBackgroundMusicPlayer();

    }
    else{

        unmuteBackgroundMusicPlayer();
        
    }
    
}

settingsSoundEffectsVolumeMuteBox.onchange = () => {

    if(settingsSoundEffectsVolumeMuteBox.checked){

        muteSoundEffectsPlayer();

    }
    else{

        unmuteSoundEffectsPlayer();
        
    }
    
}

settingsCharacterVoiceVolumeMuteBox.onchange = () => {

    if(settingsCharacterVoiceVolumeMuteBox.checked){

        muteCharacterVoiceLinePlayer();

    }
    else{

        unmuteCharacterVoiceLinePlayer();
        
    }

}

settingsState.addButton("Back", "settingsBack");

console.log("Settings State Loaded");