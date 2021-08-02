export const fetchFonts = () => new Promise((resolve) => resolve([{
    "type": "font",
    "id": "font_resource_1",
    "displayName": "Times",
    "uri": "http://localhost/editor/api/resources/font_resource_1",
    "fontFiles":[{
        "id": "font_resource_1",
        "style": "bold-italic",
        "uri": "http://localhost/editor/api/resources/font_resource_1_bi"
    },{
        "id": "font_resource_1_bi",
        "style": "italic",
        "uri": "http://localhost/editor/api/resources/font_resource_1_i"
    },{
        "id": "font_resource_1_b",
        "style": "bold",
        "uri": "http://localhost/editor/api/resources/font_resource_1_b"
    },{
        "id": "font_resource_1_r",
        "style": "regular",
        "uri": "http://localhost/editor/api/resources/font_resource_1_r"
    }]
}]));
