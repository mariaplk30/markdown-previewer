export const NEW_TEXT = "NEW_TEXT";

export const allText = (text) => dispatch => {
    dispatch ({
        type: NEW_TEXT,
        fullText: text
    })
}