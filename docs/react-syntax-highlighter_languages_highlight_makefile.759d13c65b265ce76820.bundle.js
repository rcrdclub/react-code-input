(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1744:function(module,exports){module.exports=function(hljs){var VARIABLE={className:"variable",variants:[{begin:"\\$\\("+hljs.UNDERSCORE_IDENT_RE+"\\)",contains:[hljs.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},QUOTE_STRING={className:"string",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,VARIABLE]},FUNC={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[VARIABLE]},ASSIGNMENT={begin:"^"+hljs.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},TARGET={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[VARIABLE]};return{aliases:["mk","mak"],keywords:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",lexemes:/[\w-]+/,contains:[hljs.HASH_COMMENT_MODE,VARIABLE,QUOTE_STRING,FUNC,ASSIGNMENT,{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{"meta-keyword":".PHONY"},lexemes:/[\.\w]+/},TARGET]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_makefile.759d13c65b265ce76820.bundle.js.map