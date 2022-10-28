type eventCodeType = 'Pause' | 'Backspace' | 'Tab' | 'NumLock' | 'Enter' | 'ShiftLeft' | 'ControlLeft' | 'AltLeft' | 'Pause' | 'CapsLock' | 'Lang1' | 'Lang2' | 'Escape' | 'Space' | 'Numpad9' | 'Numpad3' | 'Numpad1' | 'Numpad7' | 'ArrowLeft' | 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'F13' | 'Numpad0' | 'NumpadDecimal' | 'Digit0' | 'Digit1' | 'Digit2' | 'Digit3' | 'Digit4' | 'Digit5' | 'Digit6' | 'Digit7' | 'Digit8' | 'Digit9' | 'Period' | 'Semicolon' | 'Backquote' | 'Equal' | 'Minus' | 'KeyA' | 'KeyB' | 'KeyC' | 'KeyD' | 'KeyE' | 'KeyF' | 'KeyG' | 'KeyH' | 'KeyI' | 'KeyJ' | 'KeyK' | 'KeyL' | 'KeyM' | 'KeyN' | 'KeyO' | 'KeyP' | 'KeyQ' | 'KeyR' | 'KeyS' | 'KeyT' | 'KeyU' | 'KeyV' | 'KeyW' | 'KeyX' | 'KeyY' | 'KeyZ' | 'MetaLeft' | 'MetaRight' | 'ContextMenu' | 'Numpad0' | 'Numpad1' | 'Numpad2' | 'Numpad3' | 'Numpad4' | 'Numpad5' | 'Numpad6' | 'Numpad7' | 'Numpad8' | 'Numpad9' | 'NumpadMultiply' | 'NumpadAdd' | 'NumpadDecimal' | 'NumpadSubtract' | 'NumpadDecimal' | 'NumpadDivide' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'F25' | 'F26' | 'F27' | 'F28' | 'F29' | 'F30' | 'F31' | 'F32' | 'NumLock' | 'ScrollLock' | 'BracketLeft' | 'BracketRight' | 'Backquote' | 'Backslash' | 'Quote' | 'Minus' | 'Backslash' | 'BracketRight' | 'Minus' | 'MediaTrackNext' | 'MediaTrackPrevious' | 'VolumeMute' | 'VolumeDown' | 'VolumeUp' | 'Semicolon' | 'Equal' | 'Comma' | 'Minus' | 'Period' | 'Slash' | 'Backquote' | 'IntlRo' | 'NumpadComma' | 'BracketLeft' | 'Backslash' | 'BracketRight' | 'Quote' | 'Backquote' | 'OSLeft' | 'AltRight' | 'IntlBackslash' | 'WakeUp'
interface KeybindMemoryInterface {
    exists: () => boolean,
    set: (arg0: eventCodeType) => void;
    get: () => eventCodeType
}

function keyCheck(key: eventCodeType): eventCodeType {
    const availableKeys = ['Pause', 'Backspace', 'Tab', 'NumLock', 'Enter', 'ShiftLeft', 'ControlLeft', 'AltLeft', 'Pause', 'CapsLock', 'Lang1', 'Lang2', 'Escape', 'Space', 'Numpad9', 'Numpad3', 'Numpad1', 'Numpad7', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'F13', 'Numpad0', 'NumpadDecimal', 'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Period', 'Semicolon', 'Backquote', 'Equal', 'Minus', 'KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ', 'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT', 'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ', 'MetaLeft', 'MetaRight', 'ContextMenu', 'Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadMultiply', 'NumpadAdd', 'NumpadDecimal', 'NumpadSubtract', 'NumpadDecimal', 'NumpadDivide', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29', 'F30', 'F31', 'F32', 'NumLock', 'ScrollLock', 'BracketLeft', 'BracketRight', 'Backquote', 'Backslash', 'Quote', 'Minus', 'Backslash', 'BracketRight', 'Minus', 'MediaTrackNext', 'MediaTrackPrevious', 'VolumeMute', 'VolumeDown', 'VolumeUp', 'Semicolon', 'Equal', 'Comma', 'Minus', 'Period', 'Slash', 'Backquote', 'IntlRo', 'NumpadComma', 'BracketLeft', 'Backslash', 'BracketRight', 'Quote', 'Backquote', 'OSLeft', 'AltRight', 'IntlBackslash', 'WakeUp']
    if (!(availableKeys.includes(key))) throw SyntaxError(key + " is not a valid key")
    return key
}
function KeybindMemory(id: string): KeybindMemoryInterface {
    const idString = "keyrios"

    // LC = local storage; LCID = local storage id
    const getLC = () => JSON.parse(localStorage.getItem(idString) || '{}')
    const getLCID = () => JSON.parse(localStorage.getItem(idString) || '{}')[id]
    const idExists = () => !(!(getLCID()))

    let _return: KeybindMemoryInterface = {
        exists: () => idExists(),
        set: (key: eventCodeType) => {
            let obj: any = getLC()
            obj[id] = key
            localStorage.setItem(idString, JSON.stringify(obj))
        },
        get: () => {
            if (idExists()) return getLCID()
            else throw SyntaxError("No such id available: " + id)
        }
    }

    return _return
}
function flicker(keybind: eventCodeType,onkeydown: () => {}, onkeyup: () => {}, keybindId: string): () => void {
    let triggered: boolean = false
    const isFuncKeydown: boolean = typeof onkeydown === "function"
    const isFuncKeyup: boolean = typeof onkeyup === "function"

    const keyComparison = (): eventCodeType => {
        if (keybindId && KeybindMemory(keybindId).exists()) return KeybindMemory(keybindId).get()
        else return keyCheck(keybind)
    }

    const keydown = (event: KeyboardEvent) => {
        if (!triggered && event.code === keyComparison()) {
            triggered = true; onkeydown()
        }; event.preventDefault()
    }
    const keyup = (event: KeyboardEvent) => {
        if (event.code === keyComparison()) {
            onkeyup(); triggered = false
        }
    }

    if (isFuncKeydown) document.addEventListener("keydown", keydown)
    if (isFuncKeyup) document.addEventListener("keyup", keyup)

    return () => {
        if (isFuncKeydown) document.removeEventListener("keydown", keydown)
        if (isFuncKeyup) document.removeEventListener("keyup", keyup)
    }

}

const keyrios = {
    exists: (id: string) => KeybindMemory(id).exists(),
    get: (id: string) => KeybindMemory(id).get(),
    set: (id: string,key: eventCodeType) => KeybindMemory(id).set(key),
    flicker: (keybind: eventCodeType,onkeydown: () => {}, onkeyup: () => {}, keybindId: string) => flicker(keybind,onkeydown,onkeyup,keybindId)
}

export default keyrios