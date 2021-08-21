/*

    LOAD ALL ASSETS HERE IN THIS JAVASCRIPT FILE

*/ 



// Animations
var animations = new Animations();

var backgroundRevealAnimation = new CustomAnimation("backgroundRevealAnimation", "revealAnimation", "1.5s", 1);
var backgroundDisappearAnimation = new CustomAnimation("backgroundDisappearAnimation", "disappearAnimation", "1.5s", 1);

var characterRevealAnimation = new CustomAnimation("characterRevealAnimation", "revealAnimation", "2s", 1);
var characterDisappearAnimation = new CustomAnimation("characterDisappearAnimation", "disappearAnimation", "2s", 1);

var dialoguePrinterRevealAnimation = new CustomAnimation("dialoguePrinterRevealAnimation", "revealAnimation", "1s", 1);
var dialoguePrinterDisappearAnimation = new CustomAnimation("dialoguePrinterDisappearAnimation", "disappearAnimation", "1s", 1);

var clickRequesterAnimation = new CustomAnimation("clickRequesterAnimation", "arrowUpAndDown", "0.5s", "infinite");

var shakingAnimation = new CustomAnimation("dialoguePrinterShakingText", "shakingText", "0.5s", "infinite");

animations.addAnimation(backgroundRevealAnimation);
animations.addAnimation(backgroundDisappearAnimation);
animations.addAnimation(characterRevealAnimation);
animations.addAnimation(characterDisappearAnimation);
animations.addAnimation(dialoguePrinterRevealAnimation);
animations.addAnimation(dialoguePrinterDisappearAnimation);
animations.addAnimation(clickRequesterAnimation);
animations.addAnimation(shakingAnimation);
// End Of Animations


// Backgrounds And BackgroundDisplay
var backgrounds = new Backgrounds();
var backgroundDisplay = new BackgroundDisplay(backgrounds, animations, "gameStateBG1", "gameStateBG2", "gameStateBG3");

setBackgroundDisplayCurrentShowAnimation(backgroundRevealAnimation);
setBackgroundDisplayCurrentHideAnimation(backgroundDisappearAnimation);

var sampleBackgrounds = new Background("Sample Backgrounds");
sampleBackgrounds.addSprite("No Image Background", ".png");
sampleBackgrounds.addSprite("White Screen", ".png");
sampleBackgrounds.addSprite("Black Screen", ".png");
sampleBackgrounds.addSprite("Green Screen", ".png");
sampleBackgrounds.addSprite("Red Screen", ".png");
sampleBackgrounds.addSprite("Blue Screen", ".png");

backgrounds.addBackground(sampleBackgrounds);
// End Of Backgrounds And BackgroundDisplay



// Characters And CharacterDisplay
var characters = new Characters();
var characterDisplay = new CharacterDisplay(characters, animations, "characterLeftImg", "characterCenterImg", "characterRightImg");

setCharacterDisplayCurrentShowAnimation(characterRevealAnimation);
setCharacterDisplayCurrentHideAnimation(characterDisappearAnimation);
// End Of Characters And CharacterDisplay



// Images
var imageLibrary = new ImageLibrary();

var systemImages = new ImageAlbum("System");
systemImages.addImage("Click Requester Image", ".png");

imageLibrary.addAlbum(systemImages);
// End Of Images



// Fonts
var fontLibrary = new Fontlibrary();

var dotGothic16 = new Font("DotGothic16", "DotGothic16");

fontLibrary.addFont(dotGothic16);
// End Of Fonts



// DialoguePrinter
var characterVoiceLinePlayer = new CharacterVoiceLinePlayer(characters);
var dialoguePrinter = new DialoguePrinter(animations, imageLibrary, fontLibrary, "characterSpeechBox", "characterNameBox", "characterDialogueBox", "clickRequester");

setDialoguePrinterCurrentShowAnimation(dialoguePrinterRevealAnimation);
setDialoguePrinterCurrentHideAnimation(dialoguePrinterDisappearAnimation);

setClickRequesterSource(systemImages, 1);
setClickRequesterAnimation(clickRequesterAnimation);

var clickListener = new ClickListener("clickListener");
// End Of DialoguePrinter



// BackgroundMusicPlayer
var backgroundMusicLibrary = new BackgroundMusicLibrary();
var backgroundMusicPlayer = new BackgroundMusicPlayer(backgroundMusicLibrary);


// End Of BackgroundMusicPlayer



// SoundEffectPlayer
var soundEffectLibrary = new SoundEffectLibrary();
var soundEffectPlayer = new SoundEffectPlayer(soundEffectLibrary);


// End Of SoundEffectPlayer



// Objects and ObjectDisplay
var objectHolder = new ObjectHolder();

objectHolder.addObject(new Notify());
objectHolder.addObject(new Inquire());
objectHolder.addObject(new Selection());

var objectDisplay = new ObjectDisplay(objectHolder, "gameStateObjectDisplay");
// End OF Objects and ObjectDisplay



console.log("Assets Loaded");