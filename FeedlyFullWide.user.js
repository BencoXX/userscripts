// ==UserScript==
// @name           Feedly Full Wide
// @version        1.0
// @namespace      http://feedly.com/
// @author         BenCOXXX
// @description    Makes Feedly work better on Wide Screens
// @copyright 2018+, BenCOXXX
// @include        http://feedly.com/*
// @include        https://feedly.com/*
// @grant          GM_addStyle
// ==/UserScript==

// Original
GM_addStyle(".feedIndexTitleHolder.nonEmpty.emptyAware {font-weight: bold !important; }");
GM_addStyle("#feedlyTabsHolder .nonEmpty {color: white !important; }");
GM_addStyle(".feedUnreadCount.staticSimpleUnreadCount {color: white !important; }");
GM_addStyle(".feedIndex.target.selected {border-left: 4px solid #DD4B39 !important;}");
GM_addStyle("#feedlyTabs {overflow-y: auto;padding-left: 10px !important;padding-right: 27px;width: 240px !important;}");
GM_addStyle("#feedlyProBar {display: none !important;}");
GM_addStyle("#feedlyTabs > div:first-child {display: none !important;}");
GM_addStyle("#aboutArea {display: none !important;}");
GM_addStyle("#feedlyPart0.area {padding: 0 0 0 33px !important;}");
GM_addStyle("#mainBar {width: auto !important; }");
GM_addStyle("#feedlyPage {width: auto !important; }");
GM_addStyle(".u100Entry {max-width: none !important; }");
GM_addStyle(".entryBody {max-width: none !important; }");
GM_addStyle(".entryholder {padding-bottom: 0px !important; }");
GM_addStyle(".websiteCallForAction {display: none !important; }");

// My
GM_addStyle(".fx .container {max-width: fit-content; }");
