{
    "HTML": {
        "a": {
            "title": "Hyperlink",
            "description": "The HTML <code>&lt;a&gt;</code> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both.",
            "code": "&lt;a href='http://www.example.com/'&gt;External Link&lt;/a&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/a"
        },
        "abbr": {
            "title": "Abbreviation",
            "description": "The HTML <code>&lt;abbr&gt;</code> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.",
            "code": "&lt;p&gt;Tony Blair is the prime minister of the &lt;abbr title=United Kingdom&gt;UK&lt;/abbr&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/abbr"
        },
        "address": {
            "title": "Address",
            "description": "The HTML <code>&lt;address&gt;</code> Element may be used by authors to supply contact information for its nearest <code>&lt;article&gt;</code> or <code>&lt;body&gt;</code> ancestor; in the latter case, it applies to the whole document.",
            "code": "&lt;address&gt Example Foundation &lt;br&gt; 1234 Landings Drive &lt;br&gt; Mountain View, CA &lt;/address&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/address"
        },
        "area": {
            "title": "Area",
            "description": "The HTML <code>&lt;area&gt;</code> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <code>&lt;map&gt;</code> element.",
            "code": "&lt;map name='primary'&gt; &lt;area shape='circle' coords='200,250,25' href='another.htm' /&gt; &lt;area shape='default' nohref /&gt;&lt;/map&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/area"
        },
        "article": {
            "title": "Article",
            "description": "The HTML <code>&lt;article&gt;</code> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
            "code": "&lt;article&gt; &lt;h4&gt;A really awesome article&lt;/h4&gt; &lt;p&gt;Lots of awesome text.&lt;/p&gt;&lt;/article&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/article"
        },
        "aside": {
            "title": "Aside",
            "description": "The HTML <code>&lt;aside&gt;</code> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts; they often contains side explanation like a glossary definition, more loosely related stuff like advertisements, the biography of the author, or in web-applications, profile information or related blog links.",
            "code": "&lt;aside&gt;&lt;p&gt;Some content related to an &lt;article&gt;&lt;/p&gt;&lt;/aside&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/aside"
        },
        "audio": {
            "title": "Audio",
            "description": "The HTML <code>&lt;audio&gt;</code> element is used to represents sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <code>&lt;source&gt;</code> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <code>&lt;audio&gt;</code> element can be added too.",
            "code": "&lt;audio src='http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg' autoplay&gt; Your browser does not support the &lt;code&gt;audio&lt;/code&gt; element.&lt;/audio&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/audio"
        },
        "b": {
            "title": "Bold",
            "description": "The HTML <code>&lt;b&gt;</code> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.",
            "code": "This article describes several &lt;b&gt;text-level&lt;/b&gt; elements.",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/b"
        },
        "base": {
            "title": "Base",
            "description": "The HTML <code>&lt;base&gt;</code> element specifies the base URL to use for all relative URLs contained within a document.",
            "code": "&lt;base href='http://www.example.com/'&gt;&lt;base target='_blank' href='http://www.example.com/'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/base"
        },
        "bdi": {
            "title": "Bi-Directional Isolation",
            "description": "The HTML <code>&lt;bdi&gt;</code> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it.",
            "code": "&lt;p dir='ltr'&gt;This arabic word &lt;bdi&gt;ARABIC_PLACEHOLDER&lt;/bdi&gt; is automatically displayed rigth-to-left.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/bdi"
        },
        "bdo": {
            "title": "Bidirectional Override",
            "description": "The HTML <code>&lt;bdo&gt;</code> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality.",
            "code": "&lt;!-- Switch text direction --&gt;&lt;p&gt;This text will go left to right.&lt;/p&gt;&lt;p&gt;&lt;bdo dir='rtl'&gt;This text will go right to left.&lt;/bdo&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/bdo"
        },
        "blockquote": {
            "title": "Blockquote",
            "description": "The HTML <code>&lt;blockquote&gt;</code> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <code>&lt;cite&gt;</code> element.",
            "code": "&lt;blockquote cite='http://developer.mozilla.org'&gt; &lt;p&gt;This is a quotation taken from the Mozilla Developer Center.&lt;/p&gt;&lt;/blockquote&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote"
        },
        "body": {
            "title": "Body",
            "description": "The HTML <code>&lt;body&gt;</code> element represents the main content of an HTML document. There is only one <code>&lt;body&gt;</code> element in a document.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/body"
        },
        "br": {
            "title": "Line Break",
            "description": "The HTML <code>&lt;br&gt;</code> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.",
            "code": "Mozilla Foundation&lt;br&gt;1981 Landings Drive&lt;br&gt;Building K&lt;br&gt;Mountain View, CA 94043-0801&lt;br&gt;USA",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/br"
        },
        "button": {
            "title": "Button",
            "description": "The HTML <code>&lt;button&gt;</code> Element represents a clickable button.",
            "code": "&lt;button name='button'&gt;Click me&lt;/button&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/button"
        },
        "canvas": {
            "title": "Canvas",
            "description": "The HTML <code>&lt;canvas&gt;</code> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <code>&lt;canvas&gt;</code> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.",
            "code": "&lt;canvas id='canvas' width='300' height='300'&gt; Sorry, your browser doesn't support the &lt;canvas&gt; element.&lt;/canvas&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/canvas"
        },
        "caption": {
            "title": "Caption",
            "description": "The HTML <code>&lt;caption&gt;</code> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <code>&lt;table&gt;</code>, its styling, using CSS, may place it elsewhere, relative to the table.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/caption"
        },
        "cite": {
            "title": "Citation",
            "description": "The HTML <code>&lt;cite&gt;</code> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc.",
            "code": "More information can be found in &lt;cite&gt;[ISO-0000]&lt;/cite&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/cite"
        },
        "code": {
            "title": "Code",
            "description": "The HTML <code>&lt;code&gt;</code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.",
            "code": "&lt;p&gt;Regular text. &lt;code&gt;This is code.&lt;/code&gt; Regular text.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/code"
        },
        "col": {
            "title": "Table Column",
            "description": "The HTML <code>&lt;col&gt;</code> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <code>&lt;colgroup&gt;</code> element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/col"
        },
        "colgroup": {
            "title": "Table Column Group",
            "description": "The HTML <code>&lt;colgroup&gt;</code> Element (or HTML Table Column Group Element) defines a group of columns within a table.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/colgroup"
        },
        "command": {
            "title": "Command",
            "description": "The command element represents a command which the user can invoke.",
            "code": "&lt;command type='command' label='Save' icon='icons/save.png' onclick='save()'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/command"
        },
        "data": {
            "title": "Data",
            "description": "The HTML <code>&lt;data&gt;</code> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <code>&lt;time&gt;</code> must be used.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/data"
        },
        "datalist": {
            "title": "Datalist",
            "description": "The HTML <code>&lt;datalist&gt;</code> Element contains a set of <code>&lt;option&gt;</code> elements that represent the possible options for the value of other controls.",
            "code": "&lt;input list='browsers' /&gt;&lt;datalist id='browsers'&gt; &lt;option value='Chrome'&gt; &lt;option value='Firefox'&gt; &lt;option value='Internet Explorer'&gt; &lt;option value='Opera'&gt; &lt;option value='Safari'&gt;&lt;/datalist&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/datalist"
        },
        "dd": {
            "title": "Definition Description",
            "description": "The HTML <code>&lt;dd&gt;</code> Element (or HTML Definition Description Element) indicates the definition of a term in a definition list (<code>&lt;dl&gt;</code>) element. This element can occur only as a child element of a definition list and it must follow a <code>&lt;dt&gt;</code> element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/dd"
        },
        "del": {
            "title": "Deleted Text",
            "description": "The HTML <code>&lt;del&gt;</code> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.",
            "code": "&lt;p&gt;&lt;del&gt;This text has been deleted&lt;/del&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/del"
        },
        "details": {
            "title": "Details",
            "description": "The HTML <code>&lt;details&gt;</code> Element is used as a disclosure widget from which the user the retrieve additional information.",
            "code": "&lt;details&gt; &lt;summary&gt;Some details&lt;/summary&gt; &lt;p&gt;More info about the details.&lt;/p&gt;&lt;/details&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/details"
        },
        "dfn": {
            "title": "Definition",
            "description": "The HTML <code>&lt;dfn&gt;</code> element (or HTML Definition Element) represents the defining instance of a term.",
            "code": "&lt;!-- Define 'The Internet' --&gt;&lt;p&gt;&lt;dfn id='def-internet'&gt;The Internet&lt;/dfn&gt; is a global system of interconnected networks that use the Internet Protocol Suite (TCP/IP) to serve billions of users worldwide.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/dfn"
        },
        "div": {
            "title": "Document Division",
            "description": "The HTML <code>&lt;div&gt;</code> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <code>&lt;article&gt;</code> or <code>&lt;nav&gt;</code>) is appropriate.",
            "code": "&lt;div&gt; &lt;p&gt;Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!&lt;/p&gt;&lt;/div&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/div"
        },
        "dl": {
            "title": "Definition List",
            "description": "The HTML <code>&lt;dl&gt;</code> Element (or HTML Definition List Element) encloses a list of pairs of terms and descriptions. A common use for this element is to implement a glossary.",
            "code": "&lt;dl&gt; &lt;dt&gt;Firefox&lt;/dt&gt; &lt;dd&gt;A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.&lt;/dd&gt; &lt;!-- other terms and definitions --&gt;&lt;/dl&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/dl"
        },
        "dt": {
            "title": "Definition Term",
            "description": "The HTML <code>&lt;dt&gt;</code> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <code>&lt;dl&gt;</code>. It is usually followed by a <code>&lt;dd&gt;</code> element; however, multiple <code>&lt;dt&gt;</code> elements in a row indicate several terms that are all defined by the immediate next <code>&lt;dd&gt;</code> element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/dt"
        },
        "em": {
            "title": "Emphasis",
            "description": "The HTML <code>&lt;em&gt;</code> element (or HTML Emphasis Element) marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.",
            "code": "&lt;p&gt; In HTML 5, what was previously called &lt;em&gt;block-level&lt;/em&gt; content is now called &lt;em&gt;flow&lt;/em&gt; content.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/em"
        },
        "embed": {
            "title": "Embed",
            "description": "The HTML <code>&lt;embed&gt;</code> Element represents an integration point for an external application or interactive content (in other words, a plug-in).",
            "code": "&lt;embed type='video/quicktime' src='movie.mov' width='640' height='480'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/embed"
        },
        "fieldset": {
            "title": "Fieldset",
            "description": "The HTML <code>&lt;fieldset&gt;</code> element is used to group several controls as well as labels (<code>&lt;label&gt;</code>) within a web form.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/fieldset"
        },
        "figcaption": {
            "title": "Figcaption",
            "description": "The HTML <code>&lt;figcaption&gt;</code> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <code>&lt;figure&gt;</code> element which is its immediate ancestor which means <code>&lt;figcaption&gt;</code> can be the first or last element inside a <code>&lt;figure&gt;</code> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/figcaption"
        },
        "figure": {
            "title": "Figure",
            "description": "The HTML <code>&lt;figure&gt;</code> Element represents self-contained content, frequently with a caption (<code>&lt;figcaption&gt;</code>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.",
            "code": "&lt;figure&gt;&lt;img src='picture.jpg' alt='An awesome picture'&gt;&lt;/figure&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/figure"
        },
        "footer": {
            "title": "Footer",
            "description": "The HTML <code>&lt;footer&gt;</code> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;details&gt;</code>, <code>&lt;fieldset&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;td&gt;</code>). A footer typically contains information about the author of the section, copyright data or links to related documents.",
            "code": "&lt;footer&gt; Some copyright info or perhaps some author info for a &lt;article&gt;?&lt;/footer&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/footer"
        },
        "form": {
            "title": "Form",
            "description": "The HTML <code>&lt;form&gt;</code> element represents a section of document that contains interactive controls that enable a user to submit information to a web server.",
            "code": "&lt;form action=''&gt; &lt;label for='GET-name'&gt;Name:&lt;/label&gt; &lt;input id='GET-name' type='text' name='name'&gt; &lt;input type='submit' value='Save'&gt;&lt;/form&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/form"
        },
        "h1": {
            "title": "Heading Elements",
            "description": "Heading elements implement six levels of document headings, <code>&lt;h1&gt;</code> is the most important and <code>&lt;h6&gt;</code> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            "code": "&lt;h1&gt;Heading level 1&lt;/h1&gt;&lt;h2&gt;Heading level 2&lt;/h2&gt;&lt;h3&gt;Heading level 3&lt;/h3&gt;&lt;h4&gt;Heading level 4&lt;/h4&gt;&lt;h5&gt;Heading level 5&lt;/h5&gt;&lt;h6&gt;Heading level 6&lt;/h6&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/Heading_Elements"
        },
        "head": {
            "title": "Head",
            "description": "The HTML <code>&lt;head&gt;</code> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets",
            "code": "&lt;html&gt; &lt;head&gt; &lt;title&gt;Document title&lt;/title&gt; &lt;/head&gt;&lt;/html&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/head"
        },
        "header": {
            "title": "Header",
            "description": "The HTML <code>&lt;header&gt;</code> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.",
            "code": "&lt;header&gt; A logo perhaps?&lt;/header&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/header"
        },
        "hr": {
            "title": "HR",
            "description": "In HTML5 the HTML <code>&lt;hr&gt;</code> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.",
            "code": "&lt;p&gt;This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text.&lt;/p&gt;&lt;hr&gt;&lt;p&gt;This is second paragraph of text. This is second paragraph of text. This is second paragraph of text. This is second paragraph of text.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/hr"
        },
        "html": {
            "title": "HTML",
            "description": "The HTML <code>&lt;html&gt;</code> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element.",
            "code": "&lt;!DOCTYPE html&gt;&lt;html&gt; &lt;head&gt;...&lt;/head&gt; &lt;body&gt;...&lt;/body&gt;&lt;/html&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/html"
        },
        "i": {
            "title": "Italics",
            "description": "The HTML <code>&lt;i&gt;</code> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.",
            "code": "&lt;p&gt;This is the first sentence. &lt;i&gt;This whole sentence is in an italicized font.&lt;/i&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/i"
        },
        "iframe": {
            "title": "Inline Frame",
            "description": "The HTML <code>&lt;iframe&gt;</code> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window.",
            "code": "&lt;iframe src='page.html' width='300' height='300'&gt; &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;&lt;/iframe&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/iframe"
        },
        "img": {
            "title": "Image",
            "description": "The HTML <code>&lt;img&gt;</code> Element (or HTML Image Element) represents an image of the document.",
            "code": "&lt;img src='image.jpg' alt='An awesome image' /&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/img"
        },
        "input": {
            "title": "Input",
            "description": "The HTML <code>&lt;input&gt;</code> element is used to create interactive controls for web-based forms.",
            "code": "&lt;input type='text' name='input' value='Type here'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/input"
        },
        "ins": {
            "title": "Inserted Text",
            "description": "The HTML <code>&lt;ins&gt;</code> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document.",
            "code": "&lt;ins&gt;This text has been inserted&lt;/ins&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/ins"
        },
        "kbd": {
            "title": "Keyboard Input Element",
            "description": "The HTML <code>&lt;kbd&gt;</code> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font.",
            "code": "&lt;p&gt;Type the following in the Run dialog: &lt;kbd&gt;cmd&lt;/kbd&gt;&lt;br /&gt;Then click the OK button.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/kbd"
        },
        "keygen": {
            "title": "Key Generator",
            "description": "The HTML keygen element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the keygen element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.",
            "code": "&lt;keygen name='name' challenge='challenge string' keytype='type' keyparams='pqg-params'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/keygen"
        },
        "label": {
            "title": "Label",
            "description": "The HTML <code>&lt;label&gt;</code> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element.",
            "code": "&lt;label&gt;Click me &lt;input type='text' name='Name'&gt;&lt;/label&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/label"
        },
        "legend": {
            "title": "Legend Field",
            "description": "The HTML <code>&lt;legend&gt;</code> Element (or HTML Legend Field Element) represents a caption for the content of its parent <code>&lt;fieldset&gt;</code>.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/legend"
        },
        "li": {
            "title": "List Item",
            "description": "The HTML List item element (<code>&lt;li&gt;</code>) is used to represent a list item. It should be contained in an ordered list (<code>&lt;ol&gt;</code>), an unordered list (<code>&lt;ul&gt;</code>) or a menu (<code>&lt;menu&gt;</code>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In order lists, they are usually displayed with some ascending counter on the left such as a number or letter",
            "code": "&lt;ol&gt; &lt;li&gt;first item&lt;/li&gt; &lt;li&gt;second item&lt;/li&gt; &lt;li&gt;third item&lt;/li&gt;&lt;/ol&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/li"
        },
        "link": {
            "title": "Link",
            "description": "The HTML <code>&lt;link&gt;</code> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet.",
            "code": "&lt;link href='style.css' rel='stylesheet' type='text/css' media='all'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/link"
        },
        "map": {
            "title": "Map",
            "description": "The HTML <code>&lt;map&gt;</code> element is used with <code>&lt;area&gt;</code> elements to define a image map.",
            "code": "&lt;map&gt; &lt;area shape='circle' coords='200,250,25' href='another.htm' /&gt; &lt;area shape='default' /&gt;&lt;/map&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/map"
        },
        "mark": {
            "title": "Mark",
            "description": "The HTML <code>&lt;mark&gt;</code> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word.",
            "code": "&lt;p&gt;The &lt;mark&gt; element is used to &lt;mark&gt;highlight&lt;/mark&gt; text&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/mark"
        },
        "menu": {
            "title": "Menu",
            "description": "The HTML <code>&lt;menu&gt;</code> element represents an unordered list of menu choices, or commands.",
            "code": "&lt;menu type='toolbar'&gt; &lt;li&gt; &lt;menu label='File'&gt; &lt;button type='button' onclick='new()'&gt;New...&lt;/button&gt; &lt;button type='button' onclick='save()'&gt;Save...&lt;/button&gt; &lt;/menu&gt; &lt;/li&gt;&lt;/menu&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/menu"
        },
        "meta": {
            "title": "Meta",
            "description": "The HTML <code>&lt;meta&gt;</code> Element represents any metadata information which cannot be represented using one of the other meta-related element (<code>&lt;base&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> or <code>&lt;title&gt;</code>). According to the attributes set, the kind of metadata can be one of the following:",
            "code": "&lt;meta charset='utf-8'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/meta"
        },
        "meter": {
            "title": "Meter",
            "description": "The HTML <code>&lt;meter&gt;</code> Element represents either a scalar value within a known range or a fractional value.",
            "code": "&lt;p&gt;Heat the oven to &lt;meter min='200' max='500' value='350'&gt;350 degrees&lt;/meter&gt;.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/meter"
        },
        "nav": {
            "title": "Navigation",
            "description": "The HTML Navigation Element (<code>&lt;nav&gt;</code>) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
            "code": "&lt;nav&gt; &lt;ul&gt; &lt;li&gt;&lt;a href=''&gt;Home&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=''&gt;About&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=''&gt;Contact&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/nav&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/nav"
        },
        "noscript": {
            "title": "No Script",
            "description": "The HTML <code>&lt;noscript&gt;</code> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
            "code": "&lt;noscript&gt;&lt;a href='http://www.example.com/'&gt;External Link&lt;/a&gt;&lt;/noscript&gt;&lt;p&gt;Rocks!&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/noscript"
        },
        "object": {
            "title": "Embedded Object ",
            "description": "The HTML <code>&lt;object&gt;</code> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
            "code": "&lt;object data='move.swf' type='application/x-shockwave-flash'&gt;&lt;/object&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/object"
        },
        "ol": {
            "title": "Ordered List",
            "description": "The HTML <code>&lt;ol&gt;</code> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
            "code": "&lt;ol&gt; &lt;li&gt;first item&lt;/li&gt; &lt;li&gt;second item&lt;/li&gt; &lt;li&gt;third item&lt;/li&gt;&lt;/ol&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/ol"
        },
        "optgroup": {
            "title": "Option Group",
            "description": "In a Web form, the HTML <code>&lt;optgroup&gt;</code> element creates a grouping of options within a <code>&lt;select&gt;</code> element.",
            "code": "&lt;select&gt; &lt;optgroup label='Group 1'&gt; &lt;option&gt;Option 1.1&lt;/option&gt; &lt;/optgroup&gt; &lt;optgroup label='Group 2'&gt; &lt;option&gt;Option 2.1&lt;/option&gt; &lt;option&gt;Option 2.2&lt;/option&gt; &lt;/optgroup&gt; &lt;optgroup label='Group 3' disabled&gt; &lt;option&gt;Option 3.1&lt;/option&gt; &lt;option&gt;Option 3.2&lt;/option&gt; &lt;option&gt;Option 3.3&lt;/option&gt; &lt;/optgroup&gt;&lt;/select&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/optgroup"
        },
        "option": {
            "title": "Option",
            "description": "In a Web form, the HTML <code>&lt;option&gt;</code> element is used to create a control representing an item within a <code>&lt;select&gt;</code>, an <code>&lt;optgroup&gt;</code> or a <code>&lt;datalist&gt;</code> HTML5 element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/option"
        },
        "output": {
            "title": "Output",
            "description": "The HTML <code>&lt;output&gt;</code> element represents the result of a calculation.",
            "code": "&lt;form oninput='result.value=parseInt(a.value)+parseInt(b.value)'&gt; 0&lt;input type='range' name='b' value='50' /&gt;100 + &lt;input type='number' name='a' value='10' /&gt; = &lt;output name='result'&gt;&lt;/output&gt;&lt;/form&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/output"
        },
        "p": {
            "title": "Paragraph",
            "description": "The HTML <code>&lt;p&gt;</code> element (or HTML Paragraph Element) represents a paragraph of text.",
            "code": "&lt;p&gt;This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text.&lt;/p&gt;&lt;p&gt;This is second paragraph of text. This is second paragraph of text. This is second paragraph of text. This is second paragraph of text.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/p"
        },
        "param": {
            "title": "Parameter",
            "description": "The HTML <code>&lt;param&gt;</code> Element (or HTML Parameter Element) defines parameters for <code>&lt;object&gt;</code>.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/param"
        },
        "pre": {
            "title": "Preformatted Text",
            "description": "The HTML <code>&lt;pre&gt;</code> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed.",
            "code": "&lt;pre&gt;body{color:red;}&lt;/pre&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/pre"
        },
        "progress": {
            "title": "Progress",
            "description": "The HTML <code>&lt;progress&gt;</code> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar.",
            "code": "&lt;progress value='70' max='100'&gt;70 %&lt;/progress&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/progress"
        },
        "q": {
            "title": "Quote",
            "description": "The HTML <code>&lt;q&gt;</code> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks, for long quotations use <code>&lt;blockquote&gt;</code> element.",
            "code": "&lt;p&gt;Everytime Kenny is killed, Stan will announce &lt;q cite='http://en.wikipedia.org/wiki/Kenny_McCormick'&gt; Oh my God, they killed Kenny!&lt;/q&gt;.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/q"
        },
        "s": {
            "title": "Strikethrough",
            "description": "The HTML Strikethrough Element (<code>&lt;s&gt;</code>) renders text with a strike-through, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> elements, as appropriate.",
            "code": "&lt;s&gt;Today's Special: Salmon&lt;/s&gt;SOLD OUT&lt;br /&gt;&lt;span style='text-decoration:line-through;'&gt;Today's Special: Salmon&lt;/span&gt; SOLD OUT",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/s"
        },
        "samp": {
            "title": "Sample Text",
            "description": "The HTML Sample Text Element (<code>&lt;samp&gt;</code>) produces an inline element displayed in the browser's default monotype font (Lucida Console). This element was intended to identify sample output from a computer program.",
            "code": "&lt;p&gt;Regular text.&lt;samp&gt;This is sample text.&lt;/samp&gt; Regular text.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/samp"
        },
        "script": {
            "title": "Script",
            "description": "The HTML <code>&lt;script&gt;</code> element is used to embed or reference an executable script within an HTML or XHTML document.",
            "code": "&lt;script src='javascript.js'&gt;&lt;/script&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/script"
        },
        "section": {
            "title": "Section",
            "description": "The HTML Section Element (<code>&lt;section&gt;</code>) represents a generic section of a document, i.e. a thematic grouping of content, typically with a heading.",
            "code": "&lt;section&gt; &lt;h1&gt;Heading&lt;/h1&gt; &lt;p&gt;Bunch of awesome content&lt;/p&gt;&lt;/section&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/section"
        },
        "select": {
            "title": "Select",
            "description": "The HTML select (<code>&lt;select&gt;</code>) element represents a control that presents menu of options. The options within the menu are represented by <code>&lt;option&gt;</code> elements, which can be grouped by <code>&lt;optgroup&gt;</code> elements. Options can be pre-selected for the user.",
            "code": "&lt;select name='select'&gt; &lt;option value='value1'&gt;Value 1&lt;/option&gt; &lt;option value='value2' selected&gt;Value 2&lt;/option&gt; &lt;option value='value3'&gt;Value 3&lt;/option&gt;&lt;/select&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/select"
        },
        "small": {
            "title": "Small",
            "description": "The HTML Small Element (<code>&lt;small&gt;</code>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size. In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation.",
            "code": "&lt;p&gt;This is the first sentence. &lt;small&gt;This whole sentence is in small letters.&lt;/small&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/small"
        },
        "source": {
            "title": "Source",
            "description": "The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers.",
            "code": "&lt;video controls&gt;&lt;source src='foo.ogg' type='video/ogg'&gt;&lt;/video&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/source"
        },
        "span": {
            "title": "Span",
            "description": "The HTML <code>&lt;span&gt;</code> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <code>&lt;span&gt;</code> is very much like a <code>&lt;div&gt;</code> element, but <code>&lt;div&gt;</code> is a block-level element whereas a <code>&lt;span&gt;</code> is an inline element.",
            "code": "&lt;p&gt;&lt;span&gt;Some text&lt;/span&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/span"
        },
        "strong": {
            "title": "Strong",
            "description": "The HTML Strong Element (<code>&lt;strong&gt;</code>) gives text strong importance, and is typically displayed in bold.",
            "code": "&lt;p&gt;When doing x it is &lt;strong&gt;imperative&lt;/strong&gt; to do y before proceeding.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/strong"
        },
        "style": {
            "title": "Style",
            "description": "Style element contains style information for a document. Style information should go inside of this element, usually in the CSS language.",
            "code": "&lt;style type='text/css'&gt;body{color:red;}&lt;/style&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/style"
        },
        "sub": {
            "title": "Subscript",
            "description": "The HTML Subscript Element (<code>&lt;sub&gt;</code>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.",
            "code": "&lt;p&gt;The chemical formula of water is H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/sub"
        },
        "summary": {
            "title": "Summary",
            "description": "The HTML summary element (<code>&lt;summary&gt;</code>) is used as a summary, caption or legend for the content of a <code>&lt;details&gt;</code> element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/summary"
        },
        "sup": {
            "title": "Superscript",
            "description": "The HTML Superscript Element (<code>&lt;sup&gt;</code>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.",
            "code": "&lt;p&gt;This text is &lt;sup&gt;superscripted&lt;/sup&gt;&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/sup"
        },
        "table": {
            "title": "Table",
            "description": "The HTML Table Element (<code>&lt;table&gt;</code>) represents data in two dimensions or more.",
            "code": "&lt;table&gt; &lt;tr&gt; &lt;td&gt;John&lt;/td&gt; &lt;td&gt;Doe&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Jane&lt;/td&gt; &lt;td&gt;Doe&lt;/td&gt; &lt;/tr&gt;&lt;/table&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/table"
        },
        "tbody": {
            "title": "Table Body",
            "description": "The HTML Table Body Element (<code>&lt;tbody&gt;</code>) defines a set of rows defining the body of the table. Though not mandatory, as the rows of the body can be defined as <code>&lt;tr&gt;</code> elements children of the parent <code>&lt;table&gt;</code> element, if present, all <code>&lt;tr&gt;</code> elements part of the body must be included into a unique <code>&lt;tbody&gt;</code> element.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/tbody"
        },
        "td": {
            "title": "Table Cell",
            "description": "The Table cell (<code>&lt;td&gt;</code>) HTML element defines a cell of a table that contains data. It participates in the table model.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/td"
        },
        "textarea": {
            "title": "Text Area",
            "description": "The HTML <code>&lt;textarea&gt;</code> element represents a multi-line plain-text editing control.",
            "code": "textarea{resize: none;}",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/textarea"
        },
        "tfoot": {
            "title": "Table Foot",
            "description": "The HTML Table Foot Element (<code>&lt;tfoot&gt;</code>) defines a set of rows summarizing the columns of the table.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/tfoot"
        },
        "th": {
            "title": "Table Header Cell",
            "description": "The HTML Table Header Cell Element (<code>&lt;th&gt;</code>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the <code>&lt;scope&gt;</code> and <code>&lt;headers&gt;</code> attribute.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/th"
        },
        "thead": {
            "title": "Table Head",
            "description": "The HTML Table Head Element (<code>&lt;thead&gt;</code>) defines a set of rows defining the head of the columns of the table.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/thead"
        },
        "time": {
            "title": "Time",
            "description": "The HTML time element (<code>&lt;time&gt;</code>) represents either time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information). This element is intended to be used presenting dates and times in a machine readable format. This can be helpful for user agents to offer any event scheduling for user's calendar.",
            "code": "&lt;p&gt;The concert starts at &lt;time&gt;20:00&lt;/time&gt;.&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/time"
        },
        "title": {
            "title": "Title",
            "description": "The HTML Title Element (<code>&lt;title&gt;</code>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.",
            "code": "&lt;title&gt;Awesome page title&lt;/title&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/title"
        },
        "tr": {
            "title": "Table Row",
            "description": "The HTML Table Row Element (<code>&lt;tr&gt;</code>) defines a row of cells in a table. Those can be a mix of <code>&lt;td&gt;</code> and <code>&lt;th&gt;</code> elements.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/tr"
        },
        "track": {
            "title": "Track",
            "description": "The <code>&lt;track&gt;</code> element is used as a child of the media elements <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> and does not represent anything on its own. It lets you specify timed text tracks (or time-based data).",
            "code": "&lt;video src='sample.ogv'&gt;&lt;track kind='captions' src='sampleCaptions.srt' srclang='en'&gt;&lt;track kind='descriptions' src='sampleDesciptions.srt' srclang='en'&gt;&lt;track kind='chapters' src='sampleChapters.srt' srclang='en'&gt;&lt;track kind='subtitles' src='sampleSubtitles_de.srt' srclang='de'&gt;&lt;/video&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/track"
        },
        "u": {
            "title": "Underline",
            "description": "The HTML Underline Element (<code>&lt;u&gt;</code>) renders text with an underline, a line under the baseline of its content.",
            "code": "&lt;u&gt;Today's Special&lt;/u&gt;: Salmon&lt;br /&gt;&lt;span style='text-decoration:underline;'&gt;Today's Special&lt;/span&gt;: Salmon",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/u"
        },
        "ul": {
            "title": "Unordered List",
            "description": "The HTML unordered list element (<code>&lt;ul&gt;</code>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
            "code": "&lt;ul&gt;&lt;li&gt;first item&lt;/li&gt; &lt;li&gt;second item&lt;/li&gt; &lt;li&gt;third item&lt;/li&gt;&lt;/ul&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/ul"
        },
        "var": {
            "title": "Variable",
            "description": "The HTML Variable Element (<code>&lt;var&gt;</code>) represents a variable in a mathematical expression or a programming context.",
            "code": "var { font-style: italic; }",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/var"
        },
        "video": {
            "title": "Video",
            "description": "The HTML <code>&lt;video&gt;</code> element is used to embed video content in an HTML or XHTML document.",
            "code": "&lt;video src='foo.ogg'&gt;&lt;/video&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/video"
        },
        "wbr": {
            "title": "Word Break Opportunity",
            "description": "The Word Break Opportunity (<code>&lt;wbr&gt;</code>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.",
            "code": "&lt;p&gt;http://this&lt;wbr&gt;.is&lt;wbr&gt;.a&lt;wbr&gt;.really&lt;wbr&gt;.long&lt;wbr&gt;.example&lt;wbr&gt;.com/With&lt;wbr&gt;/deeper&lt;wbr&gt;/level&lt;wbr&gt;/pages&lt;/p&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/wbr"
        },
        "xmp": {
            "title": "Example",
            "description": "The HTML Example Element (<code>&lt;xmp&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/HTML/Element/xmp"
        }
    },
    "CSS": {
        ":active": {
            "title": "Active",
            "description": "The <code>:active</code> CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. It is often used on <code>&lt;a&gt;</code> and <code>&lt;button&gt;</code> HTML elements.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:active"
        },
        "::after (:after)": {
            "title": "After",
            "description": "The CSS <code>:after</code> pseudo-element matches a virtual last child of the selected element. Typically used to add cosmetic content to an element, by using the <code>content</code> CSS property. This element is inline by default.",
            "code": "element::after { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/::after"
        },
        "align-content": {
            "title": "Align Content",
            "description": "The CSS <code>align-content</code> property aligns a flex container's lines within the flex container when there is extra space on the cross-axis. This property has no effect on single line flexible boxes.",
            "code": "flex-start | flex-end | center | space-between | space-around | stretch",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/align-content"
        },
        "align-items": {
            "title": "Align Items",
            "description": "The CSS <code>align-items</code> property aligns flex items of the current flex line the same way as <code>justify-content</code> but in the perpendicular direction.",
            "code": "flex-start | flex-end | center | baseline | stretch",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/align-items"
        },
        "align-self": {
            "title": "Align Self",
            "description": "The <code>align-self</code> CSS property aligns flex items of the current flex line overriding the <code>align-items</code> value. If any of the flex item's cross-axis margin is set to <code>auto</code>, then <code>align-self</code> is ignored.",
            "code": "auto | flex-start | flex-end | center | baseline | stretch",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/align-self"
        },
        "&lt;angle&gt;": {
            "title": "Angle",
            "description": "The <code>&lt;angle&gt;</code> CSS data type represents angle values. Positive angles represent right angles, negative angles represent left angles. Its syntax is a <code>&lt;number&gt;</code> data type immediately followed by the unit (<code>deg</code>, <code>grad</code>, <code>rad</code> or <code>turn</code>). Like for any CSS dimension, there is no space between the unit literal and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/angle"
        },
        "animation": {
            "title": "Animation",
            "description": "The <code>animation</code> CSS property is a shorthand property for <code>animation-name</code>,<code>animation-duration</code>, <code>animation-timing-function</code>,<code>animation-delay</code>, <code>animation-iteration-count</code> and <code>animation-direction</code>.",
            "code": "&lt;single-animation-name&gt; || &lt;time&gt; || &lt;timing-function&gt; || &lt;time&gt; || &lt;single-animation-iteration-count&gt; || &lt;single-animation-direction&gt; || &lt;single-animation-fill-mode&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation"
        },
        "animation-delay": {
            "title": "Animation Delay",
            "description": "The <code>animation-delay</code> CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.",
            "code": "animation-delay: 3s",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-delay"
        },
        "animation-direction": {
            "title": "Animation Direction",
            "description": "The <code>animation-direction</code> CSS property indicates whether the animation should play in reverse on alternate cycles.",
            "code": "animation-direction: reverse",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-direction"
        },
        "animation-duration": {
            "title": "Animation Duration",
            "description": "The <code>animation-duration</code> CSS property specifies the length of time that an animation should take to complete one cycle.",
            "code": "animation-duration: 6s",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-duration"
        },
        "animation-fill-mode": {
            "title": "Animation Fill Mode",
            "description": "The <code>animation-fill-mode</code> CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.",
            "code": "animation-fill-mode: forwards",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-fill-mode"
        },
        "animation-iteration-count": {
            "title": "Animation Iteration Count",
            "description": "The <code>animation-iteration-count</code> CSS property defines the number of times an animation cycle should be played before stopping.",
            "code": "animation-iteration-count: 3",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-iteration-count"
        },
        "animation-name": {
            "title": "Animation Name",
            "description": "The <code>animation-name</code> CSS property specifies a list of animations that should be applied to the selected element.",
            "code": "animation-name: test1, test2",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-name"
        },
        "animation-play-state": {
            "title": "Animation Play State",
            "description": "The <code>animation-play-state</code> CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.",
            "code": "animation-play-state: running, paused, running",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-play-state"
        },
        "animation-timing-function": {
            "title": "Animation Timing Funct.",
            "description": "The CSS <code>animation-timing-function</code> property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <code>&lt;timing-function&gt;</code>.",
            "code": "animation-timing-function: ease-in",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/animation-timing-function"
        },
        "attr": {
            "title": "Attribute",
            "description": "The <code>attr()</code> CSS expression is used to retrieve the value of an attribute of the selected element and use it in the style sheet. It can be used on pseudo-elements too and, in this case, the value of the attribute on the pseudo-element's originated element is returned.",
            "code": "attr(attribute-name &lt;type-or-unit&gt;? [, &lt;fallback&gt; ]?)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/attr"
        },
        "auto": {
            "title": "Auto",
            "description": "Signifies a value that is to be automatically computed by a user agent. The specific effects of auto depend on the property to which it is applied as its value.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/auto"
        },
        "backface-visibility": {
            "title": "Backface Visibility",
            "description": "The CSS <code>backface-visibility</code> property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.",
            "code": "visible | hidden",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/backface-visibility"
        },
        "background": {
            "title": "Background",
            "description": "The <code>background</code> CSS property is a shorthand for setting the individual background values in a single place in the style sheet. <code>background</code> can be used to set the values for one or more of: <code>background-color</code>,<code>background-image</code>, <code>background-position</code>,<code>background-repeat</code>, <code>background-size</code>, and <code>background-attachment</code>.",
            "code": "background: red",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background"
        },
        "background-attachment": {
            "title": "Background Attachment",
            "description": "If a <code>background-image</code> is specified, the <code>background-attachment</code> CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.",
            "code": "background-attachment: attachment",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-attachment"
        },
        "background-clip": {
            "title": "Background Clip",
            "description": "The <code>background-clip</code> CSS property specifies whether an element's background, either the color or image, extends underneath its border.",
            "code": "background-clip: border-box | padding-box | content-box",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-clip"
        },
        "background-color": {
            "title": "Background Color",
            "description": "The <code>background-color</code> CSS property sets the background color of an element, either through a color value or the keyword <code>transparent</code>.",
            "code": "background-color: red",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-color"
        },
        "background-image": {
            "title": "Background Image",
            "description": "The CSS <code>background-image</code> property sets the background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The borders of the element are then drawn on top of them, and the <code>background-color</code> is drawn beneath them.",
            "code": "background-image: background-image",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-image"
        },
        "background-origin": {
            "title": "Background Origin",
            "description": "The <code>background-origin</code> CSS property determines the background positioning area, that is the position of the origin of an image specified using the <code>background-image</code> CSS property.",
            "code": "background-origin: padding-box | border-box | content-box",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-origin"
        },
        "background-position": {
            "title": "Background Position",
            "description": "The <code>background-position</code> CSS property sets the initial position, relative to the background position layer defined by <code>background-origin</code> for each defined background image.",
            "code": "background-position: top",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-position"
        },
        "background-repeat": {
            "title": "Background Repeat",
            "description": "The <code>background-repeat</code> CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both, or not repeated at all. When the repetition of the image tiles doesn't let them exactly cover the background, the way adjustments are done can be controlled by the author: by default, the last image is clipped, but the different tiles can instead be re-sized, or space can be inserted between the tiles.",
            "code": "background-repeat: repeat-style",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-repeat"
        },
        "background-size": {
            "title": "Background-Size",
            "description": "The <code>background-size</code> CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.",
            "code": "background-size: 50% | background-size: 12px",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/background-size"
        },
        "::before (:before)": {
            "title": "Before",
            "description": "<code>:before</code> creates a pseudo-element that is the first child of the element matched. Often used to add cosmetic content to an element, by using the <code>content</code> property. This element is inline by default.",
            "code": "element::before { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/::before"
        },
        "border": {
            "title": "Border",
            "description": "Like all shorthand properties, a missing value for one of the longhand properties is set to the corresponding initial value. Also note that <code>border-image</code>, though not settable using this shorthand, is reset to its initial value, that is <code>none</code>. This allows to use <code>border</code> to reset any border settings set earlier in the cascade. As the W3C intends to preserve this property in future level of the spec, it is recommended to use this method to reset border settings.",
            "code": "<code>border: &lt;border-width&gt; || &lt;border-style&gt; || &lt;color&gt;</code>",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border"
        },
        "border-bottom": {
            "title": "Border Bottom",
            "description": "The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.",
            "code": "border-bottom-style: dotted; border-bottom: thick green;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom"
        },
        "border-bottom-color": {
            "title": "Border Bottom Color",
            "description": "The <code>border-bottom-color</code> CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties <code>border-color</code> or <code>border-bottom</code> are more convenient and preferable.",
            "code": "border-bottom-color: color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom-color"
        },
        "border-bottom-left-radius": {
            "title": "Border Bottom Radius",
            "description": "A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the <code>background-clip</code> property.",
            "code": "&lt;length&gt; | &lt;percentage&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom-left-radius"
        },
        "border-bottom-right-radius": {
            "title": "Border Bottom Radius",
            "description": "A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the <code>background-clip</code> property.",
            "code": "&lt;length&gt; | &lt;percentage&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom-right-radius"
        },
        "border-bottom-style": {
            "title": "Border Bottom Style",
            "description": "The <code>border-bottom-style</code> CSS property sets the line style of the bottom border of a box.",
            "code": "border-bottom-style: border-style",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom-style"
        },
        "border-bottom-width": {
            "title": "Border Bottom Width",
            "description": "The <code>border-bottom-width</code> CSS property sets the width of the bottom border of a box.",
            "code": "border-bottom-width: border-width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-bottom-width"
        },
        "border-collapse": {
            "title": "Border Collapse",
            "description": "The <code>border-collapse</code> CSS property selects a table's border model. This has a big influence on the look and style of the table cells.",
            "code": "border-collapse: collapse | separate | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-collapse"
        },
        "border-color": {
            "title": "Border Color",
            "description": "The <code>border-color</code> CSS property is a shorthand for setting the color of the four sides of an element's border: <code>border-top-color</code>, <code>border-right-color</code>, <code>border-bottom-color</code>, <code>border-left-color</code>",
            "code": "border-color: color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-color"
        },
        "border-image": {
            "title": "Border Image",
            "description": "The <code>border-image</code> CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image"
        },
        "border-image-outset": {
            "title": "Border Image Outset",
            "description": "The <code>border-image-outset</code> property describes, by which amount the border image area extends beyond the border box.",
            "code": "border-image-outset: sides",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image-outset"
        },
        "border-image-repeat": {
            "title": "Border Image Repeat",
            "description": "The <code>border-image-repeat</code> CSS property defines how the middle part of a border image is handled to match the size of the border. It has a one-value syntax which describes the behavior for all sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.",
            "code": "stretch | repeat | round | space",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image-repeat"
        },
        "border-image-slice": {
            "title": "Border Image Slice",
            "description": "The <code>border-image-slice</code> CSS property divides the image specified by <code>border-image-source</code> in nine regions: the four corners, the four edges and the middle. It does this by specifying 4 inwards offsets.",
            "code": "border-image-slice: slice",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image-slice"
        },
        "border-image-source": {
            "title": "Border Image Source",
            "description": "The <code>border-image-source</code> CSS property defines the <code>&lt;image&gt;</code> to use instead of the style of the border. If this property is set to <code>none</code>, the style defined by <code>border-style</code> is used instead.",
            "code": "border-image-source: url(image.jpg)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image-source"
        },
        "border-image-width": {
            "title": "Border Image Width",
            "description": "The <code>border-image-width</code> CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.",
            "code": "border-image-width: width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-image-width"
        },
        "border-left": {
            "title": "Border Left",
            "description": "The <code>border-left</code> CSS property is a shorthand that sets the values of <code>border-left-color</code>, <code>border-left-style</code>, and <code>border-left-width</code>. These properties describe the left border of elements.",
            "code": "border-left-style: dotted; border-left: thick green;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-left"
        },
        "border-left-color": {
            "title": "Border Left Color",
            "description": "The <code>border-left-color</code> CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties <code>border-color</code> or <code>border-left</code> are more convenient and preferable.",
            "code": "border-left-color: color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-left-color"
        },
        "border-left-style": {
            "title": "Border Left Style",
            "description": "The <code>border-left-style</code> CSS property sets the line style of the left border of a box.",
            "code": "border-left-style: border-style",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-left-style"
        },
        "border-left-width": {
            "title": "Border Left Width",
            "description": "The <code>border-left-width</code> CSS property sets the width of the left border of a box.",
            "code": "border-left-width: border-width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-left-width"
        },
        "border-radius": {
            "title": "Border Radius",
            "description": "The <code>border-radius</code> CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.",
            "code": "border-radius: radius",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-radius"
        },
        "border-right": {
            "title": "Border Right",
            "description": "The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.",
            "code": "border-right-style: dotted; border-right: thick green;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-right"
        },
        "border-right-color": {
            "title": "Border Right Color",
            "description": "The <code>border-right-color</code> CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties <code>border-color</code> or <code>border-right</code> are more convenient and preferable.",
            "code": "border-right-color: color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-right-color"
        },
        "border-right-style": {
            "title": "Border Right Style",
            "description": "The <code>border-right-style</code> CSS property sets the line style of the right border of a box.",
            "code": "border-right-style: border-style",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-right-style"
        },
        "border-right-width": {
            "title": "Border Right Width",
            "description": "The <code>border-right-width</code> CSS property sets the width of the right border of a box.",
            "code": "border-right-width: border-width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-right-width"
        },
        "border-spacing": {
            "title": "Border Spacing",
            "description": "The <code>border-spacing</code> CSS property specifies the distance between the borders of adjacent cells (only for the separated borders model). This is equivalent to the <code>cellspacing</code> attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.",
            "code": "border-spacing: length",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-spacing"
        },
        "border-style": {
            "title": "Border Style",
            "description": "The <code>border-style</code> CSS property is a shorthand property for setting the line style for all four sides of the elements border.",
            "code": "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-style"
        },
        "border-top": {
            "title": "Border Top",
            "description": "The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.",
            "code": "border-top-style: dotted; border-top: thick green;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top"
        },
        "border-top-color": {
            "title": "Border Top Color",
            "description": "The<code> border-top-color </code>CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties <code>border-color</code> or <code>border-top</code> are more convenient and preferable.",
            "code": "border-top-color: color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top-color"
        },
        "border-top-left-radius": {
            "title": "Border Top Left Radius",
            "description": "The <code>border-top-left-radius</code> CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is zero no rounding is done and the corner is square.",
            "code": "border-top-left-radius: radius",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top-left-radius"
        },
        "border-top-right-radius": {
            "title": "Border Top Right Radius",
            "description": "The <code>border-top-right-radius</code> CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is zero no rounding is done and the corner is square.",
            "code": "border-top-right-radius: radius",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top-right-radius"
        },
        "border-top-style": {
            "title": "Border Top Style",
            "description": "The <code>border-top-style</code> CSS property sets the line style of the top border of a box.",
            "code": "border-top-style: border-style",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top-style"
        },
        "border-top-width": {
            "title": "Border Top Width",
            "description": "The <code>border-top-width</code> CSS property sets the width of the top border of a box.",
            "code": "border-top-width: border-width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-top-width"
        },
        "border-width": {
            "title": "Border Width",
            "description": "The <code>border-width</code> CSS property sets the width of the border of a box. Using the shorthand property <code>border</code> is often more convenient.",
            "code": "border-width: width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/border-width"
        },
        "bottom": {
            "title": "Bottom",
            "description": "For absolutely positioned elements, that is those with <code>position: absolute</code> or <code>position: fixed</code>, it specifies the distance between the bottom margin edge of the element and the bottom edge of its containing block.",
            "code": "bottom:length | bottom:percentage | bottom:auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/bottom"
        },
        "box-shadow": {
            "title": "Box Shadow",
            "description": "The <code>box-shadow</code> CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a <code>border-radius</code> is specified on the element with a box shadow, the box shadow takes on the same rounded corners.",
            "code": "box-shadow: 10px 5px 5px black;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/box-shadow"
        },
        "box-sizing": {
            "title": "Box Sizing",
            "description": "The <code>box-sizing</code> CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.",
            "code": "content-box | padding-box | border-box",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/box-sizing"
        },
        "break-after": {
            "title": "Break After",
            "description": "The <code>break-after</code> CSS property describes how the page, column or region break behavior after the generated box. If there is no generated box, the property is ignored.",
            "code": "auto | always | left | right | recto | verso | page | column | region | avoid | avoid-page | avoid-column | avoid-region",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/break-after"
        },
        "break-before": {
            "title": "Break Before",
            "description": "The <code>break-before</code> CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored.",
            "code": "auto | always | left | right | recto | verso | page | column | region | avoid | avoid-page | avoid-column | avoid-region",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/break-before"
        },
        "calc": {
            "title": "Calc",
            "description": "The <code>calc()</code> CSS function can be used anywhere a <code>&lt;length&gt;</code> is required. With <code>calc()</code>, you can perform calculations to determine the size and shape of objects.",
            "code": "calc(expression)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/calc"
        },
        "caption-side": {
            "title": "Caption Side",
            "description": "The <code>caption-side</code> CSS property positions the content of a table's <code>&lt;caption&gt;</code> on the specified side.",
            "code": "caption-side: side",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/caption-side"
        },
        "@charset": {
            "title": "Charset",
            "description": "This at-rule is useful when using non-ASCII characters in some CSS properties, like <code>content</code>.",
            "code": "@charset charset;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@charset"
        },
        ":checked": {
            "title": "Checked",
            "description": "The <code>:checked</code> pseudo-class applied to hidden checkboxes appended at the begin of your page could be employed in order to store some dynamic booleans to be used by a CSS rule.",
            "code": "element:checked { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:checked"
        },
        "clear": {
            "title": "Clear",
            "description": "The <code>clear</code> CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them.",
            "code": "clear: none | left | right | both",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/clear"
        },
        "clip": {
            "title": "Clip",
            "description": "The <code>clip</code> CSS property defines what portion of an element is visible. The <code>clip</code> property applies only to elements with <code>position:absolute</code>.",
            "code": "clip: &lt;shape&gt; | clip: auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/clip"
        },
        "color": {
            "title": "Color",
            "description": "The CSS <code>color</code> property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called <code>text-color</code> and would have been named so, save for historical reasons and its appearance in CSS Level 1.",
            "code": "color: red | color: #00ff00",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/color"
        },
        "&lt;color&gt;": {
            "title": "Color (CSS Data Type)",
            "description": "The <code>&lt;color&gt;</code> CSS data type denotes a color in the sRGB color space. A color can be described using a keyword, using the RGB cubic-coordinate system (via the #-hexadecimal or the <code>rgb()</code> and <code>rgba()</code> functional notations) or using the HSL cylindrical-coordinate system (via the <code>hsl()</code> and <code>hsla()</code> functional notations). Note that the list of accepted color values have been extended in the different evolution of the specification, culminating with the latest CSS3 colors.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/color_value"
        },
        "columns": {
            "title": "Columns",
            "description": "The <code>columns</code> CSS property is a shorthand property allowing to set both the <code>column-width</code> and the <code>column-count</code> properties at the same time.",
            "code": "columns: &lt;column-count&gt; || &lt;column-width&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/columns"
        },
        "column-count": {
            "title": "Column Count",
            "description": "The <code>column-count</code> CSS property describes the number of columns of the element.",
            "code": "column-count: integer | column-count: auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-count"
        },
        "column-fill": {
            "title": "Column Fill",
            "description": "The <code>column-fill</code> CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using <code>auto</code>, just take up the room the content needs.",
            "code": "column-fill: auto | column-fill: balance",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-fill"
        },
        "column-gap": {
            "title": "Column Gap",
            "description": "The <code>column-gap</code> CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.",
            "code": "column-gap: length | column-gap: normal",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-gap"
        },
        "column-rule": {
            "title": "Column Rule",
            "description": "In multi-column layouts, the <code>column-rule</code> CSS property specifies a straight line, or 'rule', to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual <code>column-rule-*</code> properties separately: <code>column-rule-width</code>, <code>column-rule-style</code> and <code>column-rule-color</code>.",
            "code": "column-rule: &lt;border-width&gt; || &lt;border-style&gt; || &lt;color&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-rule"
        },
        "column-rule-color": {
            "title": "Column Rule Color",
            "description": "The <code>column-rule-color</code> CSS property lets you set the color of the rule drawn between columns in multi-column layouts.",
            "code": "<code>column-rule-color: &lt;color&gt;</code>",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-rule-color"
        },
        "column-rule-style": {
            "title": "Column Rule Style",
            "description": "The <code>column-rule-style</code> CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
            "code": "<code>column-rule-style: &lt;border-style&gt;</code>",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-rule-style"
        },
        "column-rule-width": {
            "title": "Column Rule Width",
            "description": "The <code>column-rule-width</code>CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
            "code": "<code>column-rule-width: &lt;border-width&gt;</code>",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-rule-width"
        },
        "column-span": {
            "title": "Column Span",
            "description": "The <code>column-span</code> CSS property makes it possible for an element to span across all columns when its value is set to <code>all</code>. An element that spans more than one column is called a spanning element.",
            "code": "column-span:none | column-span:all",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-span"
        },
        "column-width": {
            "title": "Column Width",
            "description": "The <code>column-width</code> CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the <code>column-count</code> CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are <code>width</code>, <code>column-width</code>, <code>column-gap</code>, and <code>column-rule-width</code>.",
            "code": "&lt;length&gt; | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/column-width"
        },
        "content": {
            "title": "Content",
            "description": "The <code>content</code> CSS property is used with the <code>::before</code> and <code>::after</code> pseudo-elements to generate content in an element. Objects inserted using the <code>content</code> property are anonymous replaced elements.",
            "code": "normal | none | &lt;string&gt; | &lt;uri&gt; | &lt;counter&gt; | attr() | open-quote | close-quote | no-open-quote | no-close-quote | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/content"
        },
        " ": {
            "title": "CSS Counters",
            "description": "CSS counters are an implementation of Automatic counters and numbering in CSS 2.1. The value of a counter is manipulated through the use of <code>counter-reset</code> and <code>counter-increment</code> and is displayed on a page using the <code>counter()</code> or <code>counters()</code> function of the <code>content</code> property.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/counter"
        },
        "counter-increment": {
            "title": "Counter Increment",
            "description": "The <code>counter-increment</code> CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the <code>counter-reset</code> CSS property.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/counter-increment"
        },
        "counter-reset": {
            "title": "Counter Reset",
            "description": "The <code>counter-reset</code> CSS property is used to reset CSS Counters to a given value.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/counter-reset"
        },
        "cursor": {
            "title": "Cursor",
            "description": "The <code>cursor</code> CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
            "code": "cursor: auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/cursor"
        },
        ":default": {
            "title": "Default",
            "description": "The <code>:default</code> CSS pseudo-class represents any user interface element that is the default among a group of similar elements.",
            "code": ":default { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:default"
        },
        "direction": {
            "title": "Direction",
            "description": "The <code>direction</code> CSS property should be set to match the direction of the text: <code>rtl</code> for Hebrew or Arabic text and <code>ltr</code> for other scripts. This should normally be done as part of the document (e.g., using the <code>dir</code> attribute in HTML) rather than through direct use of CSS.",
            "code": "direction: ltr | rtl | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/direction"
        },
        ":disabled": {
            "title": "Disabled",
            "description": "The <code>:disabled</code> CSS pseudo-class represents any disabled element. An element is disabled if it can't be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.",
            "code": "input[type='text']:disabled { background: #ccc; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:disabled"
        },
        "display": {
            "title": "Display",
            "description": "The <code>display</code> CSS property specifies the type of rendering box used for an element. In HTML, default <code>display</code> property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is <code>inline</code>.",
            "code": "display: display-value | inline | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/display"
        },
        "@document": {
            "title": "Document",
            "description": "The <code>@document</code> rule is an at-rule that restricts the style rules contained within it based on the URL of the document. It is designed primarily for user style sheets. A <code>@document</code> rule can specify one or more matching functions. If any of the functions apply to a URL, the rule will take effect on that URL.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@document"
        },
        "element": {
            "title": "Element",
            "description": "The <code>element()</code> CSS function defines an <code>&lt;image&gt;</code> value generated from an arbitrary HTML element. This image is live, meaning that if the HTML element is changed, the CSS properties using the resulting value are automatically updated.",
            "code": "element( id )",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/element"
        },
        ":empty": {
            "title": "Empty",
            "description": "The <code>:empty</code> pseudo-class represents any element that has no children at all. Only element nodes and text (including whitespace) are considered. Comments or processing instructions do not affect whether an element is considered empty or not.",
            "code": "&lt;element&gt;:empty { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:empty"
        },
        "empty-cells": {
            "title": "Empty Cells",
            "description": "The <code>empty-cells</code> CSS property specifies how user agent should render borders and backgrounds around cells that have no visible content.",
            "code": "empty-cells: show | hide | <code>inherit</code>",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/empty-cells"
        },
        ":enabled": {
            "title": "Enabled",
            "description": "The <code>:enabled</code> CSS pseudo-class represents any enabled element. An element is enabled if it can be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an disabled state, in which it can't be activated or accept focus.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:enabled"
        },
        "filter": {
            "title": "Filter",
            "description": "The CSS <code>filter</code> property provides for effects like blurring or color shifting on an elements rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/filter"
        },
        ":first": {
            "title": "First",
            "description": "The <code>:first</code> page CSS pseudo-class describes the styling of the first page when printing a document.",
            "code": ":first { margin: 2in 3in; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:first"
        },
        ":first-child": {
            "title": " First Child",
            "description": "The <code>:first-child</code> CSS pseudo-class represents any element that is the first child element of its parent.",
            "code": "element:first-child { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:first-child"
        },
        "::first-letter (:first-letter)": {
            "title": "First Letter",
            "description": "The <code>::first-letter</code> CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line.",
            "code": "p:first-letter { color: red; font-size: 130%; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/::first-letter"
        },
        "::first-line (:first-line)": {
            "title": "First Line",
            "description": "The <code>::first-line</code> CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing <code>::first-line</code> does not match any real HTML element.",
            "code": "p::first-line { text-transform: uppercase }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/::first-line"
        },
        ":first-of-type": {
            "title": ":First Of Type",
            "description": "The <code>:first-of-type</code> CSS pseudo-class represents the first sibling of the given type in the list of children of its parent element.",
            "code": "element:first-of-type { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:first-of-type"
        },
        "flex": {
            "title": "Flex",
            "description": "The <code>flex</code> CSS property specifies ability of a flex item to alter their dimensions to fill the available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.",
            "code": "flex: &lt;'flex-grow'&gt; &lt;'flex-basis'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex"
        },
        "flex-basis": {
            "title": "Flex Basis",
            "description": "The CSS <code>flex-basis</code> property specifies the flex basis which is the initial main size of a flex item.",
            "code": "flex-basis: value",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-basis"
        },
        "flex-direction": {
            "title": "Flex Direction",
            "description": "The CSS <code>flex-direction</code> property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
            "code": "row | row-reverse | column | column-reverse",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-direction"
        },
        "flex-flow": {
            "title": "Flex Flow",
            "description": "The CSS <code>flex-flow</code> property is a shorthand property for <code>flex-direction</code> and <code>flex-wrap</code> individual properties.",
            "code": "&lt;'flex-direction'&gt; || &lt;'flex-wrap'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-flow"
        },
        "flex-grow": {
            "title": "Flex Grow",
            "description": "The CSS <code>flex-grow</code> property specifies the flex grow factor of a flex item.",
            "code": "flex-grow: 3",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-grow"
        },
        "flex-shrink": {
            "title": "Flex Shrink",
            "description": "The CSS <code>flex-shrink</code> property specifies the flex shrink factor of a flex item.",
            "code": "flex-shrink: 2",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-shrink"
        },
        "flex-wrap": {
            "title": "Flex Wrap",
            "description": "The CSS <code>flex-wrap</code> property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.",
            "code": "nowrap | wrap | wrap-reverse",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/flex-wrap"
        },
        "float": {
            "title": "Float",
            "description": "The <code>float</code> CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. A floating element is one where the computed value of <code>float</code> is not <code>none</code>.",
            "code": "left | right | none",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/float"
        },
        ":focus": {
            "title": "Focus",
            "description": "The <code>:focus</code> CSS pseudo-class is applied when a element has received focus, either from the user selecting it with the use of a keyboard or by activating with the mouse (e.g. a form input).",
            "code": "&lt;element&gt;:focus { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:focus"
        },
        "font": {
            "title": "Font",
            "description": "The <code>font</code> CSS property is either a shorthand property for setting <code>font-style</code>, <code>font-variant</code>, <code>font-weight</code>, <code>font-size</code>, <code>line-height</code> and <code>font-family</code>, or a way to set the element's font to a system font, using specific keywords.",
            "code": "p { font: 12px sans-serif }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font"
        },
        "@font-face": {
            "title": "Font Face",
            "description": "The <code>@font-face</code> CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, <code>@font-face</code> eliminates the need to depend on the limited number of fonts users have installed on their computers. The <code>@font-face</code> at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@font-face"
        },
        "font-family": {
            "title": "Font Family",
            "description": "The <code>font-family</code> CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a <code>@font-face</code> at-rule.",
            "code": "font-family: family-or-generic-name",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-family"
        },
        "font-feature-settings": {
            "title": "Font Feature Settings",
            "description": "The <code>font-feature-settings</code> CSS property allows control over advanced typographic features in OpenType fonts.",
            "code": "font-feature-settings : normal | &lt;feature-tag-value&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-feature-settings"
        },
        "font-size": {
            "title": "Font Size",
            "description": "The <code>font-size</code> CSS property specifies the size of the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of <code>em</code> and <code>ex</code> length units.",
            "code": "xx-small | x-small | small | medium | large | x-large | xx-large | smaller | larger | &lt;length&gt; | &lt;percentage&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-size"
        },
        "font-size-adjust": {
            "title": "Font Size Adjust",
            "description": "The <code>font-size-adjust</code> CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.",
            "code": "font-size-adjust: &lt;number&gt; | none | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-size-adjust"
        },
        "font-stretch": {
            "title": "Font Stretch",
            "description": "The <code>font-stretch</code> CSS property selects a normal, condensed, or expanded face from a font.",
            "code": "ultra-condensed | extra-condensed | condensed | semi-condensed | normal | semi-expanded | expanded | extra-expanded | ultra-expanded",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-stretch"
        },
        "font-style": {
            "title": "Font Style",
            "description": "The <code>font-style</code> CSS property allows <code>italic</code> or <code>oblique</code> faces to be selected within a <code>font-family</code>.",
            "code": "font-style: normal | italic | oblique | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-style"
        },
        "font-variant": {
            "title": "Font Variant",
            "description": "The <code>font-variant</code> CSS property selects a <code>normal</code>, or <code>small-caps</code> face from a font family. Setting <code>font-variant</code> is also possible by using the <code>font</code> shorthand.",
            "code": "font-variant: normal | small-caps | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-variant"
        },
        "font-weight": {
            "title": "Font Weight",
            "description": "The <code>font-weight</code> CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on <code>normal</code> and <code>bold</code>.",
            "code": "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/font-weight"
        },
        "frequency": {
            "title": "Frequency",
            "description": "The <code>&lt;frequency&gt;</code> CSS data types denotes a frequency dimension, like the pitch of a speaking voice. They consists of a <code>&lt;number&gt;</code> immediately followed by the unit. Like for any CSS dimension, there is no space between the unit literal and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/frequency"
        },
        "&lt;gradient&gt;": {
            "title": "Gradient",
            "description": "The <code>&lt;gradient&gt;</code> CSS data type denotes a CSS <code>&lt;image&gt;</code> made of a progressive transition between two or more colors. A CSS gradient is not a CSS <code>&lt;color&gt;</code> but an image with no intrinsic dimensions; that is, it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.",
            "code": "background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/gradient"
        },
        "height": {
            "title": "Height",
            "description": "The <code>height</code> CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element.",
            "code": "height: &lt;length&gt; | &lt;percentage&gt; | auto | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/height"
        },
        ":hover": {
            "title": "Hover",
            "description": "The <code>:hover</code> CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is <code>:link</code>, <code>:visited</code>, and <code>:active</code>, appearing in subsequent rules. In order to style appropriately links, you need to put the <code>:hover</code> rule after the <code>:link</code> and <code>:visited</code> rules but before the <code>:active</code> one, as defined by the LVHA-order: <code>:link</code> - <code>:visited</code> - <code>:hover</code> - <code>:active</code>.",
            "code": ".foo:hover { background: gold; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:hover"
        },
        "hyphens": {
            "title": "Hyphens",
            "description": "The <code>hyphens</code> CSS property tells the browser how to go about splitting words to improve the layout of text when line-wrapping. On HTML, the language is determined by the <code>lang</code> attribute: browsers will hyphenate only if this attribute is present and if an appropriate hyphenation dictionary is available. On XML, the <code>xml:lang</code> attribute must be used.",
            "code": "hyphens: none | manual | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/hyphens"
        },
        "&lt;image&gt;": {
            "title": "Image",
            "description": "The <code>&lt;image&gt;</code> CSS data type represents a 2D image. There are two kinds of images in CSS: plain static images, often referenced using a URL, and dynamically-generated images like gradients or representations of parts of the tree.",
            "code": "url(test.jpg)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/image"
        },
        "image-rendering": {
            "title": "Image Rendering",
            "description": "The <code>image-rendering</code> CSS property provides a hint to the user agent about how to handle its image rendering.Â It applies to any images appearing on the element properties, but has no effect on non-scaled images. For example, if the natural size of the image is 100100px but the page author specifies the dimensions to <code>200x200px</code> (or <code>50x50px</code>), then the image will be upscaled (or downscaled) to the new dimensions using the specified algorithm. Scaling may also apply due to user interaction (zooming).",
            "code": "auto | crisp-edges | pixelated",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/image-rendering"
        },
        "image-orientation": {
            "title": "Image Orientation",
            "description": "The <code>image-orientation</code> CSS property describes how to correct the default orientation of an image.",
            "code": "image-orientation: 90deg",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/image-orientation"
        },
        "ime-mode": {
            "title": "IME Mode",
            "description": "The <code>ime-mode</code> CSS property controls the state of the input method editor for text fields.",
            "code": "ime-mode: auto | normal | active | inactive | disabled",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/ime-mode"
        },
        "@import": {
            "title": "Import",
            "description": "The <code>@import</code> CSS at-rule allows to import style rules from other style sheets. These rules must precede all other types of rules, except <code>@charset</code> rules; as it is not a nested statement, it cannot be used inside conditional group at-rules.",
            "code": "@import url('fineprint.css') print;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@import"
        },
        ":indeterminate": {
            "title": ":Indeterminate",
            "description": "The <code>:indeterminate</code> CSS pseudo-class represents any <code>&lt;input type='checkbox'&gt;</code> element whose <code>indeterminate</code> DOM property is set to <code>true</code> by JavaScript. In addition, in some browsers, it can be used to match to <code>&lt;progress&gt;</code> elements in an indeterminate state.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:indeterminate"
        },
        "inherit": {
            "title": "Inherit",
            "description": "The <code>inherit</code> value is allowed on every CSS property. It causes the element for which it is specified to take the computed value of the property from its parent element.",
            "code": "h2 { color: inherit; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/inherit"
        },
        "initial": {
            "title": "Initial",
            "description": "The <code>initial</code> CSS keyword is applies the initial value of a property to an element. It is allowed on every CSS property and causes the element for which it is specified to use the initial value of the property.",
            "code": "h2 { border-color: initial; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/initial"
        },
        "&lt;integer&gt;": {
            "title": "Integer",
            "description": "The <code>&lt;integer&gt;</code> CSS data type denotes an integer number, positive or negative. There isn't any associated unit with the value. An integer consists of one or several decimal digit, 0 to 9, eventually preceded by one single + or - sign.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/integer"
        },
        ":invalid": {
            "title": ":Invalid",
            "description": "The <code>:invalid</code> CSS pseudo-class represents any <code>&lt;input&gt;</code> or <code>&lt;form&gt;</code> element whose content fails to validate according to the input's type setting. This allows you to easily have invalid fields adopt an appearance that helps the user identify and correct errors.",
            "code": "input:invalid { color: #ffdddd; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:invalid"
        },
        "justify-content": {
            "title": "Justify Content",
            "description": "The CSS <code>justify-content</code> property defines how a browser distribute available space between and around element when aligning flex items in the main-axis of the current line. The alignment is done after the lengths and auto margins are applied, meaning that, if there is at least one flexible element, with <code>flex-grow</code> different than zero, it will have no effect as there won't be any available space.",
            "code": "flex-start | flex-end | center | space-between | space-around",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/justify-content"
        },
        "@keyframes": {
            "title": "Keyframes",
            "description": "The <code>@keyframes</code> CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you get when letting the browser handle everything automatically.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@keyframes"
        },
        ":lang": {
            "title": "Language",
            "description": "The <code>:lang</code> CSS pseudo-class matches elements based on the language the element is determined to be in. In HTML, the language is determined by a combination of the <code>lang</code> attribute, the <code>&lt;meta&gt;</code> element, and possibly by information from the protocol (such as HTTP headers). For other document types there may be other document methods for determining the language.",
            "code": "element:lang(language-code) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:lang"
        },
        ":last-child": {
            "title": "Last Child",
            "description": "The <code>:last-child</code> CSS pseudo-class represents any element that is the last child element of its parent.",
            "code": "element:last-child { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:last-child"
        },
        ":last-of-type": {
            "title": ":Last Of Type",
            "description": "The <code>:last-of-type</code> CSS pseudo-class represents the last sibling of the given type in the list of children of its parent element.",
            "code": "element:last-of-type { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:last-of-type"
        },
        "left": {
            "title": "Left",
            "description": "The <code>left</code> CSS property specifies part of the position of positioned elements.",
            "code": "left: &lt;length&gt; | &lt;percentage&gt; | auto | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/left"
        },
        ":left": {
            "title": "Left",
            "description": "The <code>:left</code> CSS page pseudo-class matches any left page when printing a page. It allows to describe the styling of left-side pages.",
            "code": "@page :left { margin:2in 3in; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:left"
        },
        "&lt;length&gt;": {
            "title": "Length",
            "description": "The <code>&lt;length&gt;</code> CSS data type denotes distance measurements. It is a <code>&lt;number&gt;</code> immediately followed by a length unit (<code>px</code>, <code>em</code>, <code>pc</code>, <code>in</code>, <code>mm</code>, ...). Like for any CSS dimension, there is no space between the unit literal and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/length"
        },
        "letter-spacing": {
            "title": "Letter Spacing",
            "description": "The <code>letter-spacing</code> CSS property specifies spacing behavior between text characters.",
            "code": "letter-spacing: normal | &lt;length&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/letter-spacing"
        },
        "linear-gradient": {
            "title": "Linear Gradient",
            "description": "The CSS <code>linear-gradient()</code> function creates an <code>&lt;image&gt;</code> which represents a linear gradient of colors. The result of this function is an object of the CSS <code>&lt;gradient&gt;</code> data type. Like any other gradient, a CSS linear gradient is not a CSS <code>&lt;color&gt;</code> but an image with no intrinsic dimensions; that is, it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/linear-gradient"
        },
        ":link": {
            "title": "Link",
            "description": "The <code>:link</code> CSS pseudo-class lets you select links inside elements. This will select any link, even those already styled using selector with other link-related pseudo-classes like <code>:hover</code>, <code>:active</code> or <code>:visited</code>. In order to style only non-visited links, you need to put the <code>:link</code> rule before the other ones, as defined by the LVHA-order: <code>:link</code> - <code>:visited</code> - <code>:hover</code> - <code>:active</code>.",
            "code": "a:link { color:red; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:link"
        },
        "line-height": {
            "title": "Line Height",
            "description": "On inline elements, the <code>line-height</code> CSS property specifies the height that is used in the calculation of the line box height. On block level elements, <code>line-height</code> specifies the minimal height of line boxes within the element.",
            "code": "line-height: normal | &lt;number&gt; | &lt;length&gt; | &lt;percentage&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/line-height"
        },
        "list-style": {
            "title": "List Style",
            "description": "The <code>list-style</code> CSS property is a shorthand property for setting <code>list-style-type</code>, <code>list-style-image</code> and <code>list-style-position</code>.",
            "code": "list-style-type | list-style-position | list-style-image",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/list-style"
        },
        "list-style-image": {
            "title": "List Style Image",
            "description": "The <code>list-style-image</code> CSS property sets the image that will be used as the list item marker. It is often more convenient to use the shorthand <code>list-style</code>.",
            "code": "list-style-image: &lt;uri&gt; | none | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/list-style-image"
        },
        "list-style-position": {
            "title": "List Style Position",
            "description": "The <code>list-style-position</code> CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut <code>list-style</code>.",
            "code": "list-style-position: inside | outside | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/list-style-position"
        },
        "list-style-type": {
            "title": "List Style Type",
            "description": "The <code>list-style-type</code>CSS property specifies appearance of a list item element. As it is the only one who defaults to <code>display:list-item</code>, this is usually a <code>&lt;li&gt;</code> element, but can be any element with this <code>display</code> value.",
            "code": "list-style-type: &lt;list-style-type&gt; | none | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/list-style-type"
        },
        "margin": {
            "title": "Margin",
            "description": "The <code>margin</code> CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code> and <code>margin-left</code>. Negative value are also allowed.",
            "code": "margin: top right bottom left",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/margin"
        },
        "margin-bottom": {
            "title": "Margin Bottom",
            "description": "The <code>margin-bottom</code> CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/margin-bottom"
        },
        "margin-left": {
            "title": "Margin Left",
            "description": "The <code>margin-left</code> CSS property of an element sets the margin space required on the left side of a box associated with an element. A negative value is also allowed.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/margin-left"
        },
        "margin-right": {
            "title": "Margin Right",
            "description": "The <code>margin-right</code> CSS property of an element sets the margin space required on the right side of an element. A negative value is also allowed.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/margin-right"
        },
        "margin-top": {
            "title": "Margin Top",
            "description": "The <code>margin-top</code> CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.",
            "code": "margin-top: &lt;length&gt; | &lt;percentage&gt; | inherit | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/margin-top"
        },
        "marks": {
            "title": "Marks",
            "description": "The <code>marks</code> CSS property adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.",
            "code": "marks: [ crop || cross ] | none",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/marks"
        },
        "max-height": {
            "title": "Maximum Height",
            "description": "The <code>max-height</code> CSS property is used to set the maximum height of a given element. It prevents the used value of the <code>height</code> property from becoming larger than the value specified for <code>max-height</code>.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | none | max-content | min-content | fit-content | fill-available",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/max-height"
        },
        "max-width": {
            "title": "Maximum Width",
            "description": "The <code>max-width</code> CSS property is used to set the maximum width of a given element. It prevents the used value of the <code>width</code> property from becoming larger than the value specified for <code>max-width</code>.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | none | max-content | min-content | fit-content | fill-available",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/max-width"
        },
        "@media": {
            "title": "Media",
            "description": "The <code>@media</code> CSS at-rule associates a set of nested statements, in a CSS block, that is delimited by curly braces, with a condition defined by a media query. The <code>@media</code> at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@media"
        },
        "min-height": {
            "title": "Minimum Height",
            "description": "The <code>min-height</code> CSS property is used to set the minimum height of a given element. It prevents the used value of the <code>height</code> property from becoming smaller than the value specified for <code>min-height</code>.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | auto | max-content | min-content | fit-content | fill-available",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/min-height"
        },
        "min-width": {
            "title": "Minimum Width",
            "description": "The <code>min-width</code> CSS property is used to set the minimum width of a given element. It prevents the used value of the <code>width</code> property from becoming smaller than the value specified for <code>min-width</code>.",
            "code": "&lt;length&gt; | &lt;percentage&gt; | auto | max-content | min-content | fit-content | fill-available",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/min-width"
        },
        "none": {
            "title": "None",
            "description": "<code>none</code> is a common value for most CSS properties. It is often the default value, but can always be considered as a sort of standard value. It is comparable to the value <code>normal</code>, used in a similar manner for other properties.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/none"
        },
        "normal": {
            "title": "Normal",
            "description": "<code>normal</code> is a common value for some CSS properties. It is often the default value, but can always be considered as a sort of 'standard' value. It is comparable to the value <code>none</code>, used in a similar manner for other properties.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/normal"
        },
        ":not()": {
            "title": "Negation",
            "description": "The negation pseudo-class, <code>:not(X)</code>, is a functional notation taking a simple selector X as an argument. It matches an element that is not represented by the argument. X must not contain another negation selector, or any pseudo-elements.",
            "code": ":not(selector) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:not"
        },
        ":nth-child": {
            "title": ":nth-child",
            "description": "The <code>:nth-child</code> CSS pseudo-class matches an element that has <code>an+b-1</code> siblings before it in the document tree, for a given positive or zero value for <code>n</code>, and has a parent element.",
            "code": "element:nth-child(an + b) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:nth-child"
        },
        ":nth-last-child": {
            "title": ":nth-last-child",
            "description": "The <code>:nth-last-child</code> CSS pseudo-class matches an element that has <code>an+b-1</code> siblings after it in the document tree, for a given positive or zero value for <code>n</code>, and has a parent element. See <code>:nth-child</code> for a more thorough description of the syntax of its argument.",
            "code": "element:nth-last-child(an + b) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:nth-last-child"
        },
        ":nth-last-of-type": {
            "title": ":nth-last-of-type",
            "description": "The <code>:nth-last-of-type</code> CSS pseudo-class matches an element that has <code>an+b-1</code> siblings with the same element name after it in the document tree, for a given positive or zero value for <code>n</code>, and has a parent element. See <code>:nth-child</code> for a more thorough description of the syntax of its argument.",
            "code": "element:nth-last-of-type(an + b) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:nth-last-of-type"
        },
        ":nth-of-type": {
            "title": ":nth-of-type",
            "description": "The <code>:nth-of-type</code> CSS pseudo-class matches an element that has <code>an+b-1</code> siblings with the same element name before it in the document tree, for a given positive or zero value for <code>n</code>, and has a parent element. See <code>:nth-child</code> for a more thorough description of the syntax of its argument. This is a more flexible and useful pseudo selector if you want to ensure you're selecting the same type of tag no matter where it is inside the parent element, or what other different tags appear before it.",
            "code": "element:nth-of-type(an + b) { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:nth-of-type"
        },
        "&lt;number&gt;": {
            "title": "Number",
            "description": "The <code>&lt;number&gt;</code> CSS data type represents a number, either integer or fractional. Its syntax extends the one of the <code>&lt;integer&gt;</code> data value. To represent a fractional value, add the fractional part - a '.' followed by one or several decimal digits - to any <code>&lt;integer&gt;</code> data value. Like for <code>&lt;integer&gt;</code> data type, there isn't any unit associated to a <code>&lt;number&gt;</code>, which is not a CSS dimension.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/number"
        },
        ":only-child": {
            "title": "Only Child",
            "description": "The <code>:only-child</code> CSS pseudo-class represents any element which is the only child of its parent. This is the same as <code>:first-child:last-child</code> or <code>:nth-child(1):nth-last-child(1)</code>, but with a lower specificity.",
            "code": "parent child:only-child {property:value;}",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:only-child"
        },
        ":only-of-type": {
            "title": ":Only Of Type",
            "description": "The <code>:only-of-type</code> CSS pseudo-class represents any element that has no siblings of the given type.",
            "code": "element:only-of-type { style properties }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:only-of-type"
        },
        "opacity": {
            "title": "Opacity",
            "description": "The <code>opacity</code> CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.",
            "code": "opacity: &lt;alphavalue&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/opacity"
        },
        ":optional": {
            "title": "Optional",
            "description": "The <code>:optional</code> CSS pseudo-class represents any <code>&lt;input&gt;</code> element that does not have the required attribute set on it. This allows forms to easily indicate optional fields, and to style them accordingly.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:optional"
        },
        "order": {
            "title": "Order",
            "description": "The CSS <code>order</code> property specifies the order used to lay out flex items in their flex container. Elements are laid out by ascending order of the <code>order</code> value. Elements with the same <code>order</code> value are laid out in the order they appear in the source code.",
            "code": "order: 5",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/order"
        },
        "orphans": {
            "title": "Orphans",
            "description": "The <code>orphans</code> CSS property refers to the minimum number of lines in a block container that must be left at the bottom of the page. This property is normally used to control how page breaks occur.",
            "code": "orphans: &lt;integer&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/orphans"
        },
        "outline": {
            "title": "Outline",
            "description": "The CSS <code>outline</code> property is a shorthand property for setting one or more of the individual outline properties <code>outline-style</code>, <code>outline-width</code> and <code>outline-color</code> in a single rule. In most cases the use of this shortcut is preferable and more convenient.",
            "code": "outline-width | outline-style | outline-color",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/outline"
        },
        "outline-color": {
            "title": "Outline Color",
            "description": "The <code>outline-color</code> CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
            "code": "outline-color: &lt;color&gt; | invert | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/outline-color"
        },
        "outline-offset": {
            "title": "Outline Offset",
            "description": "The <code>outline-offset</code> CSS property is used to set space between an <code>outline</code> and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.",
            "code": "outline-offset: &lt;length&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/outline-offset"
        },
        "outline-style": {
            "title": "Outline Style",
            "description": "The <code>outline-style</code> CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
            "code": "outline-style: auto | &lt;border-style&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/outline-style"
        },
        "outline-width": {
            "title": "Outline Width",
            "description": "The <code>outline-width</code> CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:",
            "code": "outline-width: thin | medium | thick | &lt;length&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/outline-width"
        },
        "overflow": {
            "title": "Overflow",
            "description": "The <code>overflow</code> CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.",
            "code": "overflow: visible | hidden | scroll | auto | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/overflow"
        },
        "overflow-x": {
            "title": "Overflow-X",
            "description": "The <code>overflow-x</code> CSS property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.",
            "code": "visible | hidden | scroll | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/overflow-x"
        },
        "overflow-y": {
            "title": "Overflow-Y",
            "description": "The <code>overflow-y</code> CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.",
            "code": "visible | hidden | scroll | auto",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/overflow-y"
        },
        "padding": {
            "title": "Padding",
            "description": "The <code>padding</code> CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.",
            "code": "padding: 1em 3px 30px 5px",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/padding"
        },
        "padding-bottom": {
            "title": "Padding Bottom",
            "description": "The <code>padding-bottom</code> CSS property of an element sets the height of the padding area at the bottom of an element. The padding area is the space between the content of the element and it's border. Contrary to <code>margin-bottom</code> values, negative values of <code>padding-bottom</code> are invalid.",
            "code": "padding-bottom: &lt;length&gt; | &lt;percentage&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/padding-bottom"
        },
        "padding-left": {
            "title": "Padding Left",
            "description": "The <code>padding-left</code> CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and it's border. A negative value is not allowed.",
            "code": "padding-left: &lt;length&gt; | &lt;percentage&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/padding-left"
        },
        "padding-right": {
            "title": "Padding Right",
            "description": "The <code>padding-right</code> CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.",
            "code": "padding-right: &lt;length&gt; | &lt;percentage&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/padding-right"
        },
        "padding-top": {
            "title": "Padding Top",
            "description": "The <code>padding-top</code> CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to <code>margin-top</code> values, negative values of <code>padding-top</code> are invalid.",
            "code": "padding-top: &lt;length&gt; | &lt;percentage&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/padding-top"
        },
        "@page": {
            "title": "Page",
            "description": "The <code>@page</code> CSS at-rule is used to modify some CSS properties when printing a document. You can't change all CSS properties with <code>@page</code>. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.",
            "code": "@page :pseudo-class { margin: 2in; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@page"
        },
        "page-break-after": {
            "title": "Page Break After",
            "description": "The <code>page-break-after</code> CSS property adjusts page breaks after the current element.",
            "code": "auto | always | avoid | left | right",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/page-break-after"
        },
        "page-break-before": {
            "title": "Page Break Before",
            "description": "The <code>page-break-before</code> CSS property adjusts page breaks before the current element.",
            "code": "auto | always | avoid | left | right",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/page-break-before"
        },
        "page-break-inside": {
            "title": "Page Break Inside",
            "description": "The <code>page-break-inside</code> CSS property adjusts page breaks inside the current element.",
            "code": "auto | avoid",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/page-break-inside"
        },
        "&lt;percentage&gt;": {
            "title": "Percentage",
            "description": "The <code>&lt;percentage&gt;</code> CSS data types represent a percentage value. Many CSS properties can take percentage values, often to define sizes in terms of parent objects. Percentages are formed by a <code>&lt;number&gt;</code> immediately followed by the percentage sign <code>%</code>. Like for all unit in CSS, there is no space between the '%' and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/percentage"
        },
        "perspective": {
            "title": "Perspective",
            "description": "The <code>perspective</code> CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element that is placed between the z=0 and the user is enlarged, each 3D-element with z&lt;0 is shrinked. How much deformation is defined by the value of this property.",
            "code": "perspective: depth",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/perspective"
        },
        "perspective-origin": {
            "title": "Perspective Origin",
            "description": "The <code>perspective-origin</code> CSS property determines the position the viewer is looking at. It is used as the vanishing point by the <code>perspective</code> property.",
            "code": "perspective-origin: x-position y-position",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/perspective-origin"
        },
        "pointer-events": {
            "title": "Pointer Events",
            "description": "The CSS property <code>pointer-events</code> allows authors to control under what circumstances (if any) a particular graphic element can become the target of mouse events. When this property is unspecified, the same characteristics of the <code>visiblePainted</code> value apply to SVG content.",
            "code": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/pointer-events"
        },
        "position": {
            "title": "Position",
            "description": "The <code>position</code> CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.",
            "code": "static | relative | absolute | fixed | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/position"
        },
        "&lt;position&gt;": {
            "title": "Position (CSS Data Type)",
            "description": "The <code>&lt;position&gt;</code> CSS data type denotes a coordinate in a 2D space used to set a location relative to a box.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/position_value"
        },
        "quotes": {
            "title": "Quotes",
            "description": "The <code>quotes</code> CSS property indicates how user agents should render quotation marks.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/quotes"
        },
        "radial-gradient": {
            "title": "Radial Gradient",
            "description": "The CSS <code>radial-gradient()</code> function creates an The <code>&lt;image&gt;</code> which represents a gradient of colors radiating from an origin, the center of the gradient. The result of this function is an object of the CSS The <code>&lt;gradient&gt;</code> data type.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/radial-gradient"
        },
        "&ltratio&gt;": {
            "title": "Ratio",
            "description": "The <code>&lt;ratio&gt;</code> CSS data type, used for describing aspect ratios in media queries, denotes the proportion between two unitless values. It is a strictly positive The <code>&lt;integer&gt;</code> followed by a slash ('/', Unicode <code>U+002F SOLIDUS</code>) and a second strictly positive The <code>&lt;integer&gt;</code>. There may be spaces before and after the solidus.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/ratio"
        },
        ":read-write": {
            "title": "Read Write",
            "description": "The <code>:read-write</code> CSS pseudo-class matches when an element is editable by user like text input element.",
            "code": "input:read-write { background: #eee; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:read-write"
        },
        "repeating-linear-gradient": {
            "title": "Repeating Linear Gradient",
            "description": "The CSS <code>repeating-linear-gradient</code> function creates an <code>&lt;image&gt;</code> of a repeating gradients. It works similarly, and takes the same arguments, to the basic linear gradients, as described by <code>linear-gradient</code>, but it automatically repeats the color stops infinitely in both directions, with their positions shifted by multiples of the difference between the last color stop's position and the first one's position.",
            "code": "repeating-linear-gradient(45deg,blue,red)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/repeating-linear-gradient"
        },
        ":required": {
            "title": "Required",
            "description": "The <code>:required</code> CSS pseudo-class represents any <code>&lt;input&gt;</code> element that has the required attribute set on it. This allows forms to easily indicate which fields must have valid data before the form can be submitted.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:required"
        },
        "resize": {
            "title": "Resize",
            "description": "The <code>resize</code> CSS property lets you control the resizability of an element.",
            "code": "none | both | horizontal | vertical | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/resize"
        },
        "resolution": {
            "title": "Resolution",
            "description": "The <code>&lt;resolution&gt;</code> CSS data types, used in media queries, denotes the density of pixels of an output device, its resolution. It is a <code>&lt;number&gt;</code> immediately followed by a unit of resolution (dpi, dpcm, ...). Like for any CSS dimension, there is no space between the unit literal and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/resolution"
        },
        "right": {
            "title": "Right",
            "description": "The <code>right</code> CSS property specifies part of the position of positioned elements.",
            "code": "right: &lt;length&gt; | &lt;percentage&gt; | auto | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/right"
        },
        ":right": {
            "title": "Right",
            "description": "The <code>:right</code> CSS page pseudo-class matches any right page when printing a page. It allows to describe the styling of right-side page.",
            "code": "@page:right { margin: 2in 3in; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:right"
        },
        ":root": {
            "title": "Root",
            "description": "The <code>:root</code> CSS pseudo-class matches the root element of a tree representing the document. Applied to HTML, <code>:root</code> represents the <code>&lt;html&gt;</code> element and is identical to the selector <code>html</code>, except that its specifity is higher.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:root"
        },
        "::selection": {
            "title": "Selection",
            "description": "The <code>::selection</code> CSS pseudo-element applies rules to the portion of a document that has been highlighted (e.g., selected with the mouse or another pointing device) by the user.",
            "code": "p::selection {color:white; background:black;}",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/::selection"
        },
        "&lt;shape&gt;": {
            "title": "Shape",
            "description": "The <code>&lt;shape&gt;</code> CSS data type denotes the specific form of a region. This region is used to define on which part of an element some properties like <code>clip</code> do apply.",
            "code": "rect(top, right, bottom, left)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/shape"
        },
        "&lt;string&gt;": {
            "title": "String",
            "description": "The <code>&lt;string&gt;</code> CSS data type represents a string. It is formed by a Unicode characters delimited by either double or single quotes. A double quoted string cannot contain double quotes unless escaped using a backslash. The same practice applies for single quoted strings, they cannot contain single quotes unless escaped using a backslash. The backslash character must be escaped to be part of the string.",
            "code": "'Awesome string with single quotes'",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/string"
        },
        "@supports": {
            "title": "Supports",
            "description": "The <code>@supports</code> CSS at-rule associates a set of nested statements, in a CSS block, that is delimited by curly braces, with a condition consisting of testing of CSS declarations, that is property-value pairs, combined with arbitrary conjunctions, disjunctions, and negations of them. Such a condition is called a supports condition.",
            "code": "@supports &lt;supports_condition&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/@supports"
        },
        "table-layout": {
            "title": "Table Layout",
            "description": "The <code>table-layout</code> CSS property defines the algorithm to be used to layout the table cells, rows, and columns.",
            "code": "table-layout: auto | fixed",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/table-layout"
        },
        "tab-size": {
            "title": "Tab Size",
            "description": "The <code>tab-size</code> CSS property is used to customize the width of a tab (<code>U+0009</code>) character.",
            "code": "tab-size: &lt;integer&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/tab-size"
        },
        ":target": {
            "title": "Target",
            "description": "The <code>:target</code> pseudo-class represents the unique element, if any, with an id matching the fragment identifier of the URI of the document.",
            "code": ":target { outline: solid red }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:target"
        },
        "text-align": {
            "title": "Text Align",
            "description": "The <code>text-align</code> CSS property describes how inline content like text is aligned in its parent block element. <code>text-align</code> does not control the alignment of block elements itself, only their inline content.",
            "code": "start | end | left | right | center | justify | match-parent | start end",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-align"
        },
        "text-align-last": {
            "title": "Text Align Last",
            "description": "The <code>text-align-last</code> CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.",
            "code": "auto | start | end | left | right | center | justify",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-align-last"
        },
        "text-decoration": {
            "title": "Text Decoration",
            "description": "The <code>text-decoration</code> CSS property is used to set the text formatting to <code>underline</code>, <code>overline</code>, <code>line-through</code> or <code>blink</code>.",
            "code": "none | underline | overline | line-through | blink",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-decoration"
        },
        "text-decoration-color": {
            "title": "Text Decoration Color",
            "description": "The <code>text-decoration-color</code> CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by <code>text-decoration-line</code>. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements.",
            "code": "text-decoration-color: red",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-decoration-color"
        },
        "text-decoration-line": {
            "title": "Text Decoration Line",
            "description": "The <code>text-decoration-line</code> CSS property sets what kind of line decorations are added to an element.",
            "code": "none | underline | overline | line-through",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-decoration-line"
        },
        "text-decoration-style": {
            "title": "Text Decoration Style",
            "description": "The <code>text-decoration-style</code> CSS property defines the style of the lines specified by <code>text-decoration-line</code>. The style applies to all lines, there is no way to define different style for each of the line defined by <code>text-decoration-line</code>.",
            "code": "text-decoration-style: dashed",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-decoration-style"
        },
        "text-indent": {
            "title": "Text Indent",
            "description": "The <code>text-indent</code> CSS property specifies how much horizontal space should be left before the beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box.",
            "code": "p { text-indent: 2em }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-indent"
        },
        "text-overflow": {
            "title": "Text Overflow",
            "description": "The <code>text-overflow</code> CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, display an ellipsis or a Web author-defined string.",
            "code": "text-overflow: ellipsis",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-overflow"
        },
        "text-rendering": {
            "title": "Text Rendering",
            "description": "The <code>text-rendering</code> CSS property provides information to the rendering engine about what to optimize for when rendering text. The browser makes trade-offs among speed, legibility, and geometric precision. The text-rendering property is an SVG property that is not defined in any CSS standard. However, Gecko and WebKit browsers let you apply this property to HTML and XML content on Windows, Mac OS X and Linux.",
            "code": "text-rendering: auto | optimizeSpeed | optimizeLegibility | geometricPrecision | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-rendering"
        },
        "text-shadow": {
            "title": "Text Shadow",
            "description": "The <code>text-shadow</code> CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decoration of the element.",
            "code": "text-shadow: orange 0 -2px",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-shadow"
        },
        "text-transform": {
            "title": "Text Transform",
            "description": "The <code>text-transform</code> CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.",
            "code": "none | capitalize | uppercase | lowercase | full-width",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-transform"
        },
        "text-underline-position": {
            "title": "Text Underline Position",
            "description": "The CSS <code>text-underline-position</code> property specifies the position of the underline which is set using the <code>text-decoration</code> property <code>underline</code> value.",
            "code": ":text-underline-position: under",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/text-underline-position"
        },
        "&lt;time&gt;": {
            "title": "Time",
            "description": "The <code>&lt;time&gt;</code> CSS data type denotes time dimensions expressed in seconds or milliseconds. They consists of a <code>&lt;number&gt;</code> immediately followed by the unit. Like for any CSS dimension, there is no space between the unit literal and the number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/time"
        },
        "&lt;timing-function&gt;": {
            "title": "Timing Function",
            "description": "The <code>&lt;timing-function&gt;</code> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during transitions or animations. This in essence lets you establish an acceleration curve, so that the speed of the animation can vary over its duration. These functions are often called easing functions.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/timing-function"
        },
        "top": {
            "title": "Top",
            "description": "The <code>top</code> CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.",
            "code": "top: &lt;length&gt; | &lt;percentage&gt; | auto | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/top"
        },
        "transform": {
            "title": "Transform",
            "description": "The CSS <code>transform</code> property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set.",
            "code": "transform: scale(2, 0.5)",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transform"
        },
        "transform-origin": {
            "title": "Transform Origin",
            "description": "The <code>transform-origin</code> CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the <code>rotate()</code> function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)",
            "code": "transform-origin: x-offset y-offset",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transform-origin"
        },
        "transform-style": {
            "title": "Transform Style",
            "description": "The <code>transform-style</code> CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
            "code": "flat | preserve-3d",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transform-style"
        },
        "transition": {
            "title": "Transition",
            "description": "The CSS <code>transition</code> property is a shorthand property for <code>transition-property</code>, <code>transition-duration</code>, <code>transition-timing-function</code>, and <code>transition-delay</code>. It allows to define the transition between two states of an element. Different states may be defined using pseudo-classes like <code>:hover</code> or <code>:active</code> or dynamically set using JavaScript.",
            "code": "&lt;'transition-property'&gt; | &lt;'transition-duration'&gt; | &lt;'transition-timing-function'&gt; | &lt;'transition-delay'&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transition"
        },
        "transition-delay": {
            "title": "Transition Delay",
            "description": "The <code>transition-delay</code> CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.",
            "code": "transition-delay: 3s",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transition-delay"
        },
        "transition-duration": {
            "title": "Transition Duration",
            "description": "The <code>transition-duration</code> CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is <code>0s</code>, meaning that no animation will occur.",
            "code": "transition-duration: 6s",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transition-duration"
        },
        "transition-property": {
            "title": "Transition Property",
            "description": "The <code>transition-property</code> CSS property is used to specify the names of CSS properties to which a transition effect should be applied.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transition-property"
        },
        "transition-timing-function": {
            "title": "Transition Timing Function",
            "description": "The CSS <code>transition-timing-function</code> property is used to describe how the intermediate values of the CSSÂ properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.",
            "code": "transition-timing-function: ease-in",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/transition-timing-function"
        },
        "unicode-bidi": {
            "title": "Unicode Bidirectional",
            "description": "The <code>unicode-bidi</code> CSS property together with the <code>direction</code> property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding.",
            "code": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/unicode-bidi"
        },
        "&lt;url&gt;": {
            "title": "URL",
            "description": "The <code>&lt;url&gt;</code> CSS data type denotes a pointer to a resource. It has no proper syntax and can only be expressed through the <code>url()</code> functional notation.",
            "code": "url('http://mysite.example.com/mycursor.png')",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/uri"
        },
        "user-ident": {
            "title": "User Ident",
            "description": "The <code>&lt;user-ident&gt;</code> CSS data value denotes an arbitrary user-defined string used as an identifier.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/user-ident"
        },
        ":valid": {
            "title": "Valid",
            "description": "The <code>:valid</code> CSS pseudo-class represents any <code>&lt;input&gt;</code> element whose content validates correctly according to the input's type setting. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:valid"
        },
        "vertical-align": {
            "title": "Vertical Align",
            "description": "The <code>vertical-align</code> CSS property specifies the vertical alignment of an inline or table-cell element.",
            "code": "vertical-align: baseline | sub | super | text-top | text-bottom | middle | top | bottom | &lt;percentage&gt; | &lt;length&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/vertical-align"
        },
        "visibility": {
            "title": "Visibility",
            "description": "The <code>visibility</code> CSS property has two purposes: The <code>hidden</code> value hides an element but leaves space where it would have been. The <code>collapse</code> value hides rows or columns of a table. It also collapses XUL elements.",
            "code": "visible | hidden | collapse",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/visibility"
        },
        ":visited": {
            "title": "Visited",
            "description": "The <code>:visited</code> CSS pseudo-class lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is <code>:link</code>, <code>:hover</code>, and <code>:active</code>, appearing in subsequent rules.",
            "code": "a:visited { color: #4b2f89; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/:visited"
        },
        "white-space": {
            "title": "White Space",
            "description": "The <code>white-space</code> CSS property is used to to describe how whitespace inside the element is handled.",
            "code": "white-space: normal | pre | nowrap | pre-wrap | pre-line | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/white-space"
        },
        "widows": {
            "title": "Widows",
            "description": "The <code>widows</code> CSS property defines how many minimum lines must be left on top of a new page, on a <code>paged</code> media. In typography, a widow is the last line of a paragraph appearing alone at the top of a page. Setting the <code>widows</code> property allows to prevent widows to be left.",
            "code": "widows: &lt;integer&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/widows"
        },
        "width": {
            "title": "Width",
            "description": "The <code>width</code> CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element.",
            "code": "p { width: 200px; }",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/width"
        },
        "word-break": {
            "title": "Word Break",
            "description": "The <code>word-break</code> CSS property is used to specify how (or if) to break lines within words.",
            "code": "normal | break-all | keep-all",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/word-break"
        },
        "word-spacing": {
            "title": "Word Spacing",
            "description": "The <code>word-spacing</code> CSS property specifies spacing behavior between tags and words.",
            "code": "word-spacing: normal | &lt;length&gt;",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/word-spacing"
        },
        "word-wrap": {
            "title": "Word-Wrap",
            "description": "The <code>word-wrap</code> CSS property is used to specify whether or not the browser may break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box.",
            "code": "word-wrap: normal | break-word",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/overflow-wrap"
        },
        "writing-mode": {
            "title": "Writing Mode",
            "description": "CSS Writing Modes Level 3 defines CSS features to support various international script modes, such as left-to-right (e.g., Latin and Indic), right-to-left (e.g., Hebrew and Arabic), bidirectional (e.g., mixed Latin and Arabic) and vertical (e.g., Asian). This article is about the CSS <code>writing-mode</code> property.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/writing-mode"
        },
        "z-index": {
            "title": "Z-Index",
            "description": "The <code>z-index</code> CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.",
            "code": "z-index: auto | &lt;integer&gt; | inherit",
            "url": "https://developer.mozilla.org/en-US/docs/CSS/z-index"
        }
    },
    "JavaScript": {
        "Array": {
            "title": "Array",
            "description": "Arrays are list-like objects that come with a several built-in methods to perform traversal and mutation operations. Neither the size of a JavaScript array nor the types of its elements are fixed.",
            "code": "var arr = ['first element','second element'];",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array"
        },
        "Boolean": {
            "title": "Boolean",
            "description": "Boolean is a data type that can hold one of two values (<code>true</code> or <code>false</code>).",
            "code": "x = false; y = true;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean"
        },
        "Date": {
            "title": "Date",
            "description": "Creates JavaScript <code>Date</code> instances which let you work with dates and times.",
            "code": "var birthday = new Date(1995,11,17);",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date"
        },
        "Function": {
            "title": "Function",
            "description": "Generally speaking, a function is a 'subprogram' that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function can return a value.",
            "code": "function name(arguments) { statements }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function"
        },
        "Number": {
            "title": "Number",
            "description": "The <code>Number</code> JavaScript object is a wrapper object allowing you to work with numerical values. A <code>Number</code> object is created using the <code>Number()</code> constructor.",
            "code": "new Number(value)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/Number"
        },
        "Object": {
            "title": "Object",
            "description": "The <code>Object</code> constructor creates an object wrapper for the given value. If the value is <code>null</code> or <code>undefined</code>, it will create and return an empty object, otherwise, it will return an object of a type that corresponds to the given value.",
            "code": "<code>new Object( [ value ] )</code>",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object"
        },
        "RegExp": {
            "title": "Regular Expression",
            "description": "Creates a regular expression object for matching text with a pattern.",
            "code": "var re = new RegExp(\"\\w+\");",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp"
        },
        "String": {
            "title": "String",
            "description": "The <code>String</code> global object is a constructor for strings, or a sequence of characters.",
            "code": "'this is a string'",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/String"
        },
        "eval": {
            "title": "Evaluate",
            "description": "Evaluates JavaScript code represented as a string.",
            "code": "eval(string);",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval"
        },
        "ArrayBuffer": {
            "title": "Array Buffer",
            "description": "The <code>ArrayBuffer</code> is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an <code>ArrayBuffer</code>; instead, you create an <code>ArrayBufferView</code> object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.",
            "code": "ArrayBuffer ArrayBuffer(unsigned long length);",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays/ArrayBuffer"
        },
        "block": {
            "title": "Block",
            "description": "A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.",
            "code": "{ statement_1 statement_2 ... statement_n }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/block"
        },
        "break": {
            "title": "Break",
            "description": "Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.",
            "code": "break;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/break"
        },
        "const": {
            "title": "Constant",
            "description": "Declares a read-only, named constant.",
            "code": "const a = 7;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/const"
        },
        "continue": {
            "title": "Continue",
            "description": "Terminates execution of the statements in the current iteration of the current or labelled loop, and continues execution of the loop with the next iteration.",
            "code": "continue;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/continue"
        },
        "debugger": {
            "title": "Debugger",
            "description": "Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.",
            "code": "<code>debugger;</code>",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/debugger"
        },
        "do...while": {
            "title": "Do While Loop",
            "description": "Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.",
            "code": "do { i += 1; } while (i < 5);",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/do...while"
        },
        "export": {
            "title": "Export",
            "description": "Typically, information in a signed script is available only to scripts signed by the same principals. By exporting properties, functions, or objects, a signed script makes this information available to any script (signed or unsigned). The receiving script uses the companion import statement to access the information.",
            "code": "export name1, name2, ..., nameN;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/export"
        },
        "for": {
            "title": "For Loop",
            "description": "Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.",
            "code": "for (var i = 0; i < 9; i++) { n += i; }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for"
        },
        "for...in": {
            "title": "For In",
            "description": "Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.",
            "code": "for (variable in object) { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...in"
        },
        "for...of": {
            "title": "For Of",
            "description": "Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.",
            "code": "for (variable of object) { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...of"
        },
        "function": {
            "title": "Function",
            "description": "Declares a function with the specified parameters.",
            "code": "function name(parameters) { statements }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function"
        },
        "if...else": {
            "title": "If Else",
            "description": "Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.",
            "code": "if (x = y) { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/if...else"
        },
        "import": {
            "title": "Import",
            "description": "Typically, information in a signed script is available only to scripts signed by the same principals. By exporting (using the <code>export</code> statement) properties, functions, or objects, a signed script makes this information available to any script (signed or unsigned). The receiving script uses the <code>import</code> statement to access the information.",
            "code": "import objectName.name1, objectName.name2;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/import"
        },
        "label": {
            "title": "Label",
            "description": "Provides a statement with an identifier that you can refer to using a <code>break</code> or <code>continue</code> statement.",
            "code": "label : statement",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/label"
        },
        "let": {
            "title": "Let Operator",
            "description": "<code>let</code> allows you to declare variables, limiting its scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.",
            "code": "let a = 4;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/let"
        },
        "return": {
            "title": "Return",
            "description": "Specifies the value to be returned by a function.",
            "code": "function square(x) { return x * x; }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/return"
        },
        "switch": {
            "title": "Switch",
            "description": "Evaluates an expression, matching the expression's value to a case label, and executes statements associated with that case.",
            "code": "switch (expression) { case label1: statement1 break; case label2: statement2 break; default: statement break; }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch"
        },
        "throw": {
            "title": "Throw",
            "description": "Use the <code>throw</code> statement to throw an exception. When you throw an exception, <code>expression</code> specifies the value of the exception.",
            "code": "throw expression;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/throw"
        },
        "try...catch": {
            "title": "Try Catch",
            "description": "Marks a block of statements to try, and specifies a response, should an exception be thrown.",
            "code": "try { try_statements } catch (exception_var_1 if condition_1) { catch_statements_1 }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/try...catch"
        },
        "var": {
            "title": "Variable",
            "description": "Declares a variable, optionally initializing it to a value.",
            "code": "var a = 1; var b = 2;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/var"
        },
        "while": {
            "title": "While Loop",
            "description": "Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.",
            "code": "while (condition) { statement }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/while"
        },
        "with": {
            "title": "With",
            "description": "Extends the scope chain for a statement.",
            "code": "with (object) { statement }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/with"
        },
        "arithmetic": {
            "title": "Arithmetic Operators",
            "description": "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.",
            "code": "+, -, *, /, %, ++, --, unary -, unary +",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/arithmetic"
        },
        "assignment": {
            "title": "Assignment Operators",
            "description": "An assignment operator assigns a value to its left operand based on the value of its right operand.",
            "code": "=, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/assignment"
        },
        "bitwise": {
            "title": "Bitwise Operators",
            "description": "Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.",
            "code": "&, |, ^, ~, <<, >>, >>>",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/bitwise"
        },
        "comparison": {
            "title": "Comparison Operators",
            "description": "A comparison operator compares its operands and returns a logical value based on whether the comparison is true.",
            "code": "==, !=, ===, !==, >, >=, <, <=",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/comparison"
        },
        "logical": {
            "title": "Logical Operators",
            "description": "Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.",
            "code": "&&, ||, !",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/logical"
        },
        "string": {
            "title": "String Operators",
            "description": "The string operators concatenate two string values together, returning another string that is the union of the two strings.",
            "code": "+ and +=",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/string"
        },
        "member": {
            "title": "Member Operators",
            "description": "Member operators provide access to a property or method of an object.",
            "code": "object.property and object['property']",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/member"
        },
        "conditional": {
            "title": "Conditional Operator",
            "description": "The conditional operator returns one of two values based on the logical value of the condition.",
            "code": "condition ? ifTrue : ifFalse",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/conditional"
        },
        "comma": {
            "title": "Comma Operator",
            "description": "The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/comma"
        },
        "delete": {
            "title": "Delete Operator",
            "description": "The <code>delete</code> operator deletes objects.",
            "code": "delete object.property",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/delete"
        },
        "get": {
            "title": "Get Operator",
            "description": "Binds an object property to a function that will be called when that property is looked up.",
            "code": "get prop() { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/get"
        },
        "in": {
            "title": "In Operator",
            "description": "The <code>in</code> operator determines whether an object has a given property.",
            "code": "prop in objectName ",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/in"
        },
        "instanceof": {
            "title": "Instanceof Operator",
            "description": "The instanceof operator determines whether an object is an instance of another object.",
            "code": "object instanceof constructor",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/instanceof"
        },
        "new": {
            "title": "New Operator",
            "description": "The <code>new</code> operator creates an instance of a constructor.",
            "code": "new constructor(arguments)",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/new"
        },
        "set": {
            "title": "Set Operator",
            "description": "Binds an object property to a function to be called when there is an attempt to set that property.",
            "code": "set prop(val) { ... }",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/set"
        },
        "this": {
            "title": "This Operator",
            "description": "The <code>this</code> operator refers to the execution context. In general, the object bound to <code>this</code> in the current scope is determined by how the current function was called, it can't be set by assignment during execution, and it can be different each time the function is called.",
            "code": "this.a = 37;",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/this"
        },
        "typeof": {
            "title": "Typeof Operator",
            "description": "The <code>typeof</code> operator determines the type of a given object.",
            "code": "typeof 3.14 === 'number';",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof"
        },
        "void": {
            "title": "Void Operator",
            "description": "The <code>void</code> operator discards an expressions return value.",
            "code": "void expression",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/void"
        },
        "precedence": {
            "title": "Operator Precedence",
            "description": "Operator precedence determines the order in which operators are evaluated. Operators with higher precedence are evaluated first.",
            "code": "3 + 4 * 5 // returns 23",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Operator_Precedence"
        },
        "comments": {
            "title": "Comments",
            "description": "Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed; this can be a valuable debugging tool.",
            "code": "// This is a one line JavaScript comment<br>/* This is a two line<br>JavaScript comment */",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Code_comments"
        },
        "Math.abs": {
            "title": "Math.abs",
            "description": "Returns the absolute value of a number.",
            "code": "var abs = Math.abs(x);",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/abs"
        },
        "Math.acos": {
            "title": "Math.acos",
            "description": "Returns the arccosine (in radians) of a number.",
            "code": "Math.acos(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/acos"
        },
        "String.anchor": {
            "title": "String.anchor",
            "description": "Creates an HTML anchor that is used as a hypertext target.",
            "code": "anchor(nameAttribute)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/anchor"
        },
        "Function.prototype.apply": {
            "title": "Function.prototype.apply",
            "description": "Calls a function with a given <code>this</code> value and <code>arguments</code> provided as an array (or an array like object).",
            "code": "fun.apply(thisArg[, argsArray])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Function/apply"
        },
        "Math.asin": {
            "title": "Math.asin",
            "description": "Returns the arcsine (in radians) of a number.",
            "code": "Math.asin(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/asin"
        },
        "Math.atan": {
            "title": "Math.atan",
            "description": "Returns the arctangent (in radians) of a number.",
            "code": "Math.atan(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/atan"
        },
        "Math.atan2": {
            "title": "Math.atan2",
            "description": "Returns the arctangent of the quotient of its arguments.",
            "code": "Math.atan2(y, x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/atan2"
        },
        "String.big": {
            "title": "String.big",
            "description": "Causes a string to be displayed in a big font as if it were in a <code>&lt;big&gt;</code> tag.",
            "code": "string.big()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/big"
        },
        "String.blink": {
            "title": "String.blink",
            "description": "Causes a string to blink as if it were in a <code>&lt;blink&gt;</code> tag.",
            "code": "string.blink()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/blink"
        },
        "String.bold": {
            "title": "String.bold",
            "description": "Causes a string to be displayed as bold as if it were in a <code>&lt;b&gt;</code> tag.",
            "code": "string.bold()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/bold"
        },
        "Function.prototype.call": {
            "title": "Function.prototype.call",
            "description": "Calls a function with a given <code>this</code> value and arguments provided individually.",
            "code": "fun.call(thisArg[, arg1[, arg2[, ...]]])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Function/call"
        },
        "Math.ceil": {
            "title": "Math.ceil",
            "description": "Returns the smallest integer greater than or equal to a number.",
            "code": "Math.ceil(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/ceil"
        },
        "String.charAt": {
            "title": "String.charAt",
            "description": "Returns the specified character from a string.",
            "code": "string.charAt(index)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/charAt"
        },
        "String.charCodeAt": {
            "title": "String.charCodeAt",
            "description": "Returns the numeric Unicode value of the character at the given index.",
            "code": "string.charCodeAt(index)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/charCodeAt"
        },
        "Array.concat": {
            "title": "Array.concat",
            "description": "Returns a new array comprised of this array joined with other array(s) and/or value(s).",
            "code": "array.concat(value1, value2,..., valueN)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/concat"
        },
        "String.concat": {
            "title": "String.concat",
            "description": "Combines the text of two or more strings and returns a new string.",
            "code": "string.concat(string1, string2,..., stringN)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/concat"
        },
        "Math.cos": {
            "title": "Math.cos",
            "description": "Returns the cosine of a number.",
            "code": "Math.cos(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/cos"
        },
        "decodeURI": {
            "title": "DecodeURI",
            "description": "Decodes a Uniform Resource Identifier (URI) previously created by <code>encodeURI</code> or by a similar routine.",
            "code": "decodeURI(encodedURI)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/decodeURI"
        },
        "encodeURI": {
            "title": "EncodeURI",
            "description": "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two 'surrogate' characters).",
            "code": "encodeURI(URI)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/encodeURI"
        },
        "decodeURIComponent": {
            "title": "decodeURIComponent",
            "description": "Decodes a Uniform Resource Identifier (URI) component previously created by <code>encodeURIComponent</code> or by a similar routine.",
            "code": "decodeURIComponent(encodedURI)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/decodeURIComponent"
        },
        "encodeURIComponent": {
            "title": "encodeURIComponent",
            "description": "Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two 'surrogate' characters).",
            "code": "var encoded = encodeURIComponent(str);",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Functions/encodeURIComponent"
        },
        "Array.every": {
            "title": "Array.every",
            "description": "Tests whether all elements in the array pass the test implemented by the provided function.",
            "code": "array.every(callback[, thisObject])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/every"
        },
        "exec": {
            "title": "Exec",
            "description": "Executes a search for a match in a specified string. Returns a result array, or <code>null</code>.",
            "code": "regexp.exec(str)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/RegExp/exec"
        },
        "Math.exp": {
            "title": "Math.exp",
            "description": "Returns <code>E<sup>x</sup></code>, where <code>x</code> is the argument, and <code>E</code> is Euler's constant, the base of the natural logarithms.",
            "code": "Math.exp(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/exp"
        },
        "Array.filter": {
            "title": "Array.filter",
            "description": "Creates a new array with all elements that pass the test implemented by the provided function.",
            "code": "array.filter(callback[, thisObject])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter"
        },
        "String.fixed": {
            "title": "String.fixed",
            "description": "Causes a string to be displayed in fixed-pitch font as if it were in a <code>&lt;tt&gt;</code> tag.",
            "code": "string.fixed()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/fixed"
        },
        "Math.floor": {
            "title": "Math.floor",
            "description": "Returns the largest integer less than or equal to a number.",
            "code": "Math.floor(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/floor"
        },
        "String.fontcolor": {
            "title": "String.fontcolor",
            "description": "Causes a string to be displayed in the specified color as if it were in a <code>&lt;font color='color'&gt;</code> tag.",
            "code": "fontcolor(color)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/fontcolor"
        },
        "String.fontsize": {
            "title": "String.fontsize",
            "description": "Causes a string to be displayed in the specified font size as if it were in a <code>&lt;font size='size'&gt;</code> tag.",
            "code": "string.fontsize(size)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/fontsize"
        },
        "Array.forEach": {
            "title": "Array.forEach",
            "description": "Executes a provided function once per array element.",
            "code": "array.forEach(callback[, thisArg])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/forEach"
        },
        "String.fromCharCode": {
            "title": "String.fromCharCode",
            "description": "Returns a string created by using the specified sequence of Unicode values.",
            "code": "String.fromCharCode(num1,..., numN)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/fromCharCode"
        },
        "Date.getDate": {
            "title": "Date.getDate",
            "description": "Returns the day of the month for the specified date according to local time.",
            "code": "date.getDate()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getDate"
        },
        "Date.getDay": {
            "title": "Date.getDay",
            "description": "Returns the day of the week for the specified date according to local time.",
            "code": "date.getDay()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getDay"
        },
        "Date.getFullYear": {
            "title": "Date.getFullYear",
            "description": "Returns the year of the specified date according to local time.",
            "code": "date.getFullYear()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getFullYear"
        },
        "Date.getHours": {
            "title": "Date.getHours",
            "description": "Returns the hour for the specified date according to local time.",
            "code": "date.getHours()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getHours"
        },
        "Date.getMilliseconds": {
            "title": "Date.getMilliseconds",
            "description": "Returns the milliseconds in the specified date according to local time.",
            "code": "date.getMilliseconds()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getMilliseconds"
        },
        "Date.getMinutes": {
            "title": "Date.getMinutes",
            "description": "Returns the minutes in the specified date according to local time.",
            "code": "date.getMinutes()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getMinutes"
        },
        "Date.getMonth": {
            "title": "Date.getMonth",
            "description": "Returns the month in the specified date according to local time.",
            "code": "date.getMonth()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getMonth"
        },
        "Date.getSeconds": {
            "title": "Date.getSeconds",
            "description": "Returns the seconds in the specified date according to local time.",
            "code": "date.getSeconds()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getSeconds"
        },
        "Date.getTime": {
            "title": "Date.getTime",
            "description": "Returns the numeric value corresponding to the time for the specified date according to universal time.",
            "code": "date.getTime()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getTime"
        },
        "Date.getTimezoneOffset": {
            "title": "Date.getTimezoneOffset",
            "description": "Returns the time-zone offset from UTC, in minutes, for the current locale.",
            "code": "date.getTimezoneOffset() ",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getTimezoneOffset"
        },
        "Date.getUTCDate": {
            "title": "Date.getUTCDate",
            "description": "Returns the day (date) of the month in the specified date according to universal time.",
            "code": "date.getUTCDate()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCDate"
        },
        "Date.getUTCDay": {
            "title": "Date.getUTCDay",
            "description": "Returns the day of the week in the specified date according to universal time.",
            "code": "date.getUTCDay()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCDay"
        },
        "Date.getUTCFullYear": {
            "title": "Date.getUTCFullYear",
            "description": "Returns the year in the specified date according to universal time.",
            "code": "date.getUTCFullYear()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCFullYear"
        },
        "Date.getUTCHours": {
            "title": "Date.getUTCHours",
            "description": "Returns the hours in the specified date according to universal time.",
            "code": "date.getUTCHours()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCHours"
        },
        "Date.getUTCMilliseconds": {
            "title": "Date.getUTCMilliseconds",
            "description": "Returns the milliseconds in the specified date according to universal time.",
            "code": "date.getUTCMilliseconds()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCMilliseconds"
        },
        "Date.getUTCMinutes": {
            "title": "Date.getUTCMinutes",
            "description": "Returns the minutes in the specified date according to universal time.",
            "code": "date.getUTCMinutes()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCMinutes"
        },
        "Date.getUTCMonth": {
            "title": "Date.getUTCMonth",
            "description": "Returns the month of the specified date according to universal time.",
            "code": "date.getUTCMonth()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCMonth"
        },
        "Date.getUTCSeconds": {
            "title": "Date.getUTCSeconds",
            "description": "Returns the seconds in the specified date according to universal time.",
            "code": "date.getUTCSeconds()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getUTCSeconds"
        },
        "Date.getYear": {
            "title": "Date.getYear",
            "description": "Returns the year in the specified date according to local time.",
            "code": "date.getYear()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getYear"
        },
        "Array.indexOf": {
            "title": "Array.indexOf",
            "description": "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
            "code": "array.indexOf(searchElement[, fromIndex])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf"
        },
        "String.indexOf": {
            "title": "String.indexOf",
            "description": "Returns the index within the calling string object of the first occurrence of the specified value, starting the search at <code>fromIndex</code>, returns -1 if the value is not found.",
            "code": "string.indexOf(searchValue[, fromIndex])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/indexOf"
        },
        "isFinite": {
            "title": "isFinite",
            "description": "Evaluates an argument to determine whether it is a finite number.",
            "code": "isFinite(number)",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isFinite"
        },
        "isNaN": {
            "title": "isNaN",
            "description": "Evaluates an argument to determine whether it is not a number.",
            "code": "isNaN(testValue)",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN"
        },
        "String.italics": {
            "title": "String.italics",
            "description": "Causes a string to be italic, as if it were in an <code>&lt;i&gt;</code> tag.",
            "code": "string.italics()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/italics"
        },
        "Array.join": {
            "title": "Array.join",
            "description": "Joins all elements of an array into a string.",
            "code": "string = array.join(separator)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/join"
        },
        "Array.lastIndexOf": {
            "title": "Array.lastIndexOf",
            "description": "Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at <code>fromIndex</code>.",
            "code": "array.lastIndexOf(searchElement[, fromIndex])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/lastIndexOf"
        },
        "String.lastIndexOf": {
            "title": "String.lastIndexOf",
            "description": "Returns the index within the calling <code>String</code> object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at <code>fromIndex</code>.",
            "code": "string.lastIndexOf(searchValue[, fromIndex])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/lastIndexOf"
        },
        "String.link": {
            "title": "String.link",
            "description": "Creates an HTML hypertext link that requests another URL.",
            "code": "link(hrefAttribute)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/link"
        },
        "Math.log": {
            "title": "Math.log",
            "description": "Returns the natural logarithm (base <code>E</code>) of a number.",
            "code": "Math.log(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/log"
        },
        "Array.prototype.map": {
            "title": "Array.prototype.map()",
            "description": "Creates a new array with the results of calling a provided function on every element in this array.",
            "code": "array.map(callback[, thisArg])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/map"
        },
        "Math.max": {
            "title": "Math.max",
            "description": "Returns the largest of zero or more numbers.",
            "code": "Math.max(value1,value2,value3)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/max"
        },
        "Math.min": {
            "title": "Math.Min",
            "description": "Returns the smallest of zero or more numbers.",
            "code": "Math.min(value1,value2,value3)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/min"
        },
        "Date.parse": {
            "title": "Date.parse",
            "description": "Parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.",
            "code": "Date.parse(dateString)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/parse"
        },
        "parseFloat": {
            "title": "parseFloat",
            "description": "Parses a string argument and returns a floating point number.",
            "code": "parseFloat(string)",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseFloat"
        },
        "parseInt": {
            "title": "parseInt",
            "description": "Parses a string argument and returns an integer of the specified radix or base.",
            "code": "parseInt(string)",
            "url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseInt"
        },
        "Array.pop": {
            "title": "Array.pop",
            "description": "Removes the last element from an array and returns that element.",
            "code": "array.pop()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/pop"
        },
        "Math.pow": {
            "title": "Math.pow",
            "description": "Returns <code>base</code> to the <code>exponent</code> power, that is, <code>base<sup>exponent</sup></code>.",
            "code": "Math.pow(base,exponent)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/pow"
        },
        "Array.push": {
            "title": "Array.push",
            "description": "Mutates an array by appending the given elements and returning the new length of the array.",
            "code": "array.push(element1,element2,...,elementN)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/push"
        },
        "Math.random": {
            "title": "Math.random",
            "description": "Returns a floating-point, pseudo-random number in the range <code>[0, 1]</code> that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.",
            "code": "Math.random()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random"
        },
        "String.replace": {
            "title": "String.replace",
            "description": "Returns a new string with some or all matches of a <code>pattern</code> replaced by a <code>replacement</code>. The <code>pattern</code> can be a string or a RegExp, and the <code>replacement</code> can be a string or a function to be called for each match.",
            "code": "var str = 'Apples are round, and apples are juicy.';<br>var newstr = str.replace(re, 'oranges');",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/replace"
        },
        "Array.reverse": {
            "title": "Array.reverse",
            "description": "Reverses an array in place. The first array element becomes the last and the last becomes the first.",
            "code": "array.reverse()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/reverse"
        },
        "Math.round": {
            "title": "Math.round",
            "description": "Returns the value of a number rounded to the nearest integer.",
            "code": "Math.round(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/round"
        },
        "String.search": {
            "title": "String.search",
            "description": "Executes the search for a match between a regular expression and this <code>String</code> object.",
            "code": "string.search(regexp)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/search"
        },
        "Date.setDate": {
            "title": "Date.setDate",
            "description": "Sets the day of the month for a specified date according to local time.",
            "code": "date.setDate(14)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setDate"
        },
        "Date.setFullYear": {
            "title": "Date.setFullYear",
            "description": "Sets the full year for a specified date according to local time.",
            "code": "date.setFullYear(1997)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setFullYear"
        },
        "Date.setHours": {
            "title": "Date.setHours",
            "description": "Sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated <code>Date</code> instance.",
            "code": "date.setHours(7)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setHours"
        },
        "Date.setMilliseconds": {
            "title": "Date.setMilliseconds",
            "description": "Sets the milliseconds for a specified date according to local time.",
            "code": "date.setMilliseconds(100)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setMilliseconds"
        },
        "Date.setMinutes": {
            "title": "Date.setMinutes",
            "description": "Sets the minutes for a specified date according to local time.",
            "code": "date.setMinutes(45)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setMinutes"
        },
        "Date.setMonth": {
            "title": "Date.setMonth",
            "description": "Set the month for a specified date according to local time.",
            "code": "date.setMonth(6)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setMonth"
        },
        "Date.setSeconds": {
            "title": "Date.setSeconds",
            "description": "Sets the seconds for a specified date according to local time.",
            "code": "date.setSeconds(30)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setSeconds"
        },
        "Date.setTime": {
            "title": "Date.setTime",
            "description": "Sets the value of the <code>Date</code> object according to local time.",
            "code": "date.setTime(timeValue)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setTime"
        },
        "Date.setUTCDate": {
            "title": "Date.setUTCDate",
            "description": "Sets the day of the month for a specified date according to universal time.",
            "code": "date.setUTCDate(20)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCDate"
        },
        "Date.setUTCFullYear": {
            "title": "Date.setUTCFullYear",
            "description": "Sets the full year for a specified date according to universal time.",
            "code": "date.setUTCFullYear(1997)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCFullYear"
        },
        "Date.setUTCHours": {
            "title": "Date.setUTCHours",
            "description": "Sets the hour for a specified date according to universal time.",
            "code": "date.setUTCHours(8)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCHours"
        },
        "Date.setUTCMilliseconds": {
            "title": "Date.setUTCMilliseconds",
            "description": "Sets the milliseconds for a specified date according to universal time.",
            "code": "date.setUTCMilliseconds(500)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCMilliseconds"
        },
        "Date.setUTCMinutes": {
            "title": "Date.setUTCMinutes",
            "description": "Sets the minutes for a specified date according to universal time.",
            "code": "date.setUTCMinutes(43);",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCMinutes"
        },
        "Date.setUTCMonth": {
            "title": "Date.setUTCMonth",
            "description": "Sets the month for a specified date according to universal time.",
            "code": "date.setUTCMonth(11);",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCMonth"
        },
        "Date.setUTCSeconds": {
            "title": "Date.setUTCSeconds",
            "description": "Sets the seconds for a specified date according to universal time.",
            "code": "date.setUTCSeconds(20);",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setUTCSeconds"
        },
        "Date.setYear": {
            "title": "Date.setYear",
            "description": "Sets the year for a specified date according to local time.",
            "code": "date.setYear(2000)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/setYear"
        },
        "Array.shift": {
            "title": "Array.shift",
            "description": "Removes the first element from an array and returns that element. This method changes the length of the array.",
            "code": "array.shift()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/shift"
        },
        "Math.sin": {
            "title": "Math.sin",
            "description": "Returns the sine of a number.",
            "code": "Math.sin(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/sin"
        },
        "Array.slice": {
            "title": "Array.slice",
            "description": "Extracts a section of an array and returns the new array.",
            "code": "array.slice(begin, end)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/slice"
        },
        "String.slice": {
            "title": "String.slice",
            "description": "Extracts a section of a string and returns the new string.",
            "code": "string.slice(begin, end)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/slice"
        },
        "String.small": {
            "title": "String.small",
            "description": "Causes a string to be displayed in a small font, as if it were in a <code>&lt;small&gt;</code> tag.",
            "code": "string.small()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/small"
        },
        "Array.some": {
            "title": "Array.some",
            "description": "Tests whether some element in the array passes the test implemented by the provided function.",
            "code": "array.some(callback[, thisObject])",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/some"
        },
        "Array.sort": {
            "title": "Array.sort",
            "description": "Sorts the elements of an array in place and returns the array.",
            "code": "array.sort()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/sort"
        },
        "Array.splice": {
            "title": "Array.splice",
            "description": "Changes the content of an array, adding new elements while removing old elements.",
            "code": "array.splice(index, numberOfElements, newElements)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/splice"
        },
        "String.split": {
            "title": "String.split",
            "description": "Splits a <code>String</code> object into an array of strings by separating the string into substrings.",
            "code": "string.split(separator, limit)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/split"
        },
        "Math.sqrt": {
            "title": "Math.sqrt",
            "description": "Returns the square root of a number.",
            "code": "Math.sqrt(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/sqrt"
        },
        "String.strike": {
            "title": "String.strike",
            "description": "Causes a string to be displayed as struck-out text, as if it were in a <code>&lt;strike&gt;</code> tag.",
            "code": "string.strike()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/strike"
        },
        "String.sub": {
            "title": "String.sub",
            "description": "Causes a string to be displayed as a subscript, as if it were in a <code>&lt;sub&gt;</code> tag.",
            "code": "string.sub()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/sub"
        },
        "String.substr": {
            "title": "String.substr",
            "description": "Returns the characters in a string beginning at the specified location through the specified number of characters.",
            "code": "string.substr(start, length)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/substr"
        },
        "String.substring": {
            "title": "String.substring",
            "description": "Returns a subset of a string between one index and another, or through the end of the string.",
            "code": "string.substring(indexA, indexB)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/substring"
        },
        "String.sup": {
            "title": "String.sup",
            "description": "Causes a string to be displayed as a superscript, as if it were in a <code>&lt;sup&gt;</code> tag.",
            "code": "string.sup()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/sup"
        },
        "Math.tan": {
            "title": "Math.tan",
            "description": "Returns the tangent of a number.",
            "code": "Math.tan(x)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/tan"
        },
        "Regexp.test": {
            "title": "Regexp.Test",
            "description": "Executes the search for a match between a regular expression and a specified string. Returns <code>true</false> or <code>false</code>.",
            "code": "regexp.test(str)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/RegExp/test"
        },
        "Number.toExponential": {
            "title": "Number.toExponential",
            "description": "Returns a string representing the Number object in exponential notation.",
            "code": "number.toExponential(fractionDigits)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/toExponential"
        },
        "Number.toFixed": {
            "title": "Number.toFixed",
            "description": "Returns a string representing the number in fixed-point notation.",
            "code": "number.toFixed(digits)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/toFixed"
        },
        "Date.toGMTString": {
            "title": "Date.toGMTString",
            "description": "Converts a date to a string, using Internet GMT conventioins.",
            "code": "date.toGMTString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toGMTString"
        },
        "Date.toLocaleString": {
            "title": "Date.toLocaleString",
            "description": "Converts a date to a string, using the operating system's locale's conventions.",
            "code": "date.toLocaleString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toLocaleString"
        },
        "Date.toLocaleDateString": {
            "title": "Date.toLocaleDateString",
            "description": "Converts a date to a string, returning the 'date' portion using the operating system's locale's conventions.",
            "code": "date.toLocaleDateString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toLocaleDateString"
        },
        "Date.toLocaleTimeString": {
            "title": "Date.toLocaleTimeString",
            "description": "Converts a date to a string, returning the 'time' portion using the current locale's conventions.",
            "code": "date.toLocaleTimeString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toLocaleTimeString"
        },
        "String.toLowerCase": {
            "title": "String.toLowerCase",
            "description": "Returns the calling string value converted to lowercase.",
            "code": "string.toLowerCase();",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/toLowerCase"
        },
        "Number.toPrecision": {
            "title": "Number.toPrecision",
            "description": "Returns a string representing the Number object to the specified precision.",
            "code": "number.toPrecision(precision)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/toPrecision"
        },
        "Array.toSource": {
            "title": "Array.toSource",
            "description": "Returns a string representing the source code of the array.",
            "code": "array.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/toSource"
        },
        "Boolean.toSource": {
            "title": "Boolean.toSource",
            "description": "Returns a string representing the source code of the object.",
            "code": "boolean.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Boolean/toSource"
        },
        "Date.toSource": {
            "title": "Date.toSource",
            "description": "Returns a string representing the source code of the date.",
            "code": "date.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toSource"
        },
        "Function.toSource": {
            "title": "Function.toSource",
            "description": "Returns a string representing the source code for the function.",
            "code": "function.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Function/toSource"
        },
        "Number.toSource": {
            "title": "Number.toSource",
            "description": "Returns a string representing the source code of the number.",
            "code": "number.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/toSource"
        },
        "Object.toSource": {
            "title": "Object.toSource",
            "description": "Returns a string representing the source code of the object.",
            "code": "object.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/toSource"
        },
        "RegExp.toSource": {
            "title": "RegExp.toSource",
            "description": "Returns a string representing the source code of the regular expression.",
            "code": "regexp.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/RegExp/toSource"
        },
        "String.toSource": {
            "title": "String.toSource",
            "description": "Returns a string representing the source code of the string.",
            "code": "string.toSource()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/toSource"
        },
        "Array.toString": {
            "title": "Array.toString",
            "description": "Returns a string representing the specified array and its elements.",
            "code": "array.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/toString"
        },
        "Boolean.toString": {
            "title": "Boolean.toString",
            "description": "Returns a string representing the specified Boolean object.",
            "code": "boolean.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/RegExp/toString"
        },
        "Date.toString": {
            "title": "Date.toString",
            "description": "Returns a string representing the specified Date object.",
            "code": "date.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toString"
        },
        "Function.toString": {
            "title": "Function.toString",
            "description": "Returns a string representing the source code of the function.",
            "code": "function.toString(indentation)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Function/toString"
        },
        "Number.toString": {
            "title": "Number.toString",
            "description": "Returns a string representing the specified Number object.",
            "code": "number.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/toString"
        },
        "Object.toString": {
            "title": "Object.toString",
            "description": "Returns a string representing the object.",
            "code": "object.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/toString"
        },
        "String.toString": {
            "title": "String.toString",
            "description": "Returns a string representing the specified object.",
            "code": "string.toString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/toString"
        },
        "String.toUpperCase": {
            "title": "String.toUpperCase",
            "description": "Returns the calling string value converted to uppercase.",
            "code": "string.toUpperCase()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/toUpperCase"
        },
        "Date.toUTCString": {
            "title": "Date.toUTCString",
            "description": "Converts a date to a string, using the universal time convention.",
            "code": "date.toUTCString()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/toUTCString"
        },
        "Array.unshift": {
            "title": "Array.unshift",
            "description": "Adds one or more elements to the beginning of an array and returns the new length of the array.",
            "code": "array.unshift(element1,element2,..., elementN)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/unshift"
        },
        "Object.unwatch": {
            "title": "Object.unwatch",
            "description": "Removes a watchpoint set with the <code>watch()</code> method.",
            "code": "object.unwatch(prop)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/unwatch"
        },
        "Date.UTC": {
            "title": "Date.UTC",
            "description": "Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a <code>Date</code> object since January 1, 1970, 00:00:00, universal time.",
            "code": "Date.UTC(year, month, date, hrs, min, sec, ms)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/UTC"
        },
        "Boolean.valueOf": {
            "title": "Boolean.valueOf",
            "description": "Returns the primitive value of a Boolean object.",
            "code": "boolean.valueOf()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/valueOf"
        },
        "Number.valueOf": {
            "title": "Number.valueOf",
            "description": "Returns the primitive value of a Number object.",
            "code": "number.valueOf()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/valueOf"
        },
        "String.valueOf": {
            "title": "String.valueOf",
            "description": "Returns the primitive value of a String object.",
            "code": "string.valueOf()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/valueOf"
        },
        "Date.valueOf": {
            "title": "Date.valueOf",
            "description": "Returns the primitive value of a Date object.",
            "code": "date.valueOf()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/valueOf"
        },
        "Object.valueOf": {
            "title": "Object.valueOf",
            "description": "Returns the primitive value of the specified object.",
            "code": "object.valueOf()",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/valueOf"
        },
        "Object.watch": {
            "title": "Object.watch",
            "description": "Watches for a property to be assigned a value and runs a function when that occurs.",
            "code": "object.watch(prop, handler)",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/watch"
        },
        "Math.E": {
            "title": "Math.E",
            "description": "The base of natural logarithms, e, approximately 2.718.",
            "code": "function getNapier() { return Math.E }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/E"
        },
        "Array.length": {
            "title": "Array.length",
            "description": "An integer that specifies the number of elements in an array.",
            "code": "var length = array.length;",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/length"
        },
        "arguments.length": {
            "title": "arguments.length",
            "description": "Specifies the number of arguments passed to the function.",
            "code": "arguments.length",
            "url": "https://developer.mozilla.org/en-US/docs/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/length"
        },
        "Function.length": {
            "title": "Function.length",
            "description": "Specifies the number of arguments expected by the function.",
            "code": "console.log((function (a, b) {...}).length); ",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Function/length"
        },
        "String.length": {
            "title": "String.length",
            "description": "Returns the length of a string.",
            "code": "'this is a string'.length",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/String/length"
        },
        "Math.LN2": {
            "title": "Math.LN2",
            "description": "The natural logarithm of 2, approximately 0.693.",
            "code": "function getNatLog2() { return Math.LN2 }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/LN2"
        },
        "Math.LN10": {
            "title": "Math.LN10",
            "description": "The natural logarithm of 10, approximately 2.302.",
            "code": "function getNatLog10() { return Math.LN10 }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/LN10"
        },
        "Math.LOG2E": {
            "title": "Math.LOG2E",
            "description": "The base 2 logarithm of E (approximately 1.442).",
            "code": "function getLog2e() { return Math.LOG2E }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/LOG2E"
        },
        "Math.LOG10E": {
            "title": "Math.LOG10E",
            "description": "The base 10 logarithm of E (approximately 0.434).",
            "code": "function getLog10e() { return Math.LOG10E }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/LOG10E"
        },
        "NaN": {
            "title": "Not-A-Number",
            "description": "A value representing Not-A-Number.",
            "code": "NO_CODE",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Number/NaN"
        },
        "Math.PI": {
            "title": "Math.PI",
            "description": "The ratio of the circumference of a circle to its diameter, approximately 3.14159.",
            "code": "function getPi() { return Math.PI }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/PI"
        },
        "Math.SQRT1_2": {
            "title": "Math.SQRT1_2",
            "description": "The square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.",
            "code": "function getRoot1_2() { return Math.SQRT1_2 }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/SQRT1_2"
        },
        "Math.SQRT2": {
            "title": "Math.SQRT2",
            "description": "The square root of 2, approximately 1.414.",
            "code": "function getRoot2() { return Math.SQRT2 }",
            "url": "https://developer.mozilla.org/en-US/docs/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/SQRT2"
        }
    },
    "jQuery": {
        ".add()": {
            "title": ".add()",
            "description": "Add elements to the set of matched elements. Given a jQuery object that represents a set of DOM elements, the <code>.add()</code> method constructs a new jQuery object from the union of those elements and the ones passed into the method. The argument to <code>.add()</code> can be pretty much anything that <code>$()</code> accepts, including a jQuery selector expression, references to DOM elements, or an HTML snippet.",
            "code": "$('p').add('div');",
            "url": "http://api.jquery.com/add/"
        },
        ".addBack()": {
            "title": ".addBack()",
            "description": "Add the previous set of elements on the stack to the current set, optionally filtered by a selector.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/addBack/"
        },
        ".addClass()": {
            "title": ".addClass()",
            "description": "Adds the specified class(es) to each of the set of matched elements. It's important to note that this method does not replace a class. It simply adds the class, appending it to any which may already be assigned to the elements. More than one class may be added at a time, separated by a space, to the set of matched elements.",
            "code": "$('p').addClass('myClass');",
            "url": "http://api.jquery.com/addClass/"
        },
        ".after()": {
            "title": ".after()",
            "description": "Insert content, specified by the parameter, after each element in the set of matched elements. The <code>.after()</code> and <code>.insertAfter()</code> methods perform the same task. The major difference is in the syntax, specifically, in the placement of the content and target. With <code>.after()</code>, the selector expression preceding the method is the container after which the content is inserted. With <code>.insertAfter()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted after the target container.",
            "code": "$('.inner').after('&lt;p&gt;Test&lt;/p&gt;');",
            "url": "http://api.jquery.com/after/"
        },
        ".ajaxComplete()": {
            "title": ".ajaxComplete()",
            "description": "Register a handler to be called when Ajax requests complete. Whenever an Ajax request completes, jQuery triggers the <code>ajaxComplete</code> event. Any and all handlers that have been registered with the <code>.ajaxComplete()</code> method are executed at this time.",
            "code": "$(document).ajaxComplete(function(){ ... });",
            "url": "http://api.jquery.com/ajaxComplete/"
        },
        ".ajaxError()": {
            "title": ".ajaxError()",
            "description": "Register a handler to be called when Ajax requests complete with an error. Whenever an Ajax request completes with an error, jQuery triggers the <code>ajaxError</code> event. Any and all handlers that have been registered with the <code>.ajaxError()</code> method are executed at this time.",
            "code": "$(document).ajaxError(function(){ ... });",
            "url": "http://api.jquery.com/ajaxError/"
        },
        ".ajaxSend()": {
            "title": ".ajaxSend()",
            "description": "Attach a function to be executed before an Ajax request is sent. Whenever an Ajax request is about to be sent, jQuery triggers the <code>ajaxSend</code> event. Any and all handlers that have been registered with the <code>.ajaxSend()</code> method are executed at this time.",
            "code": "$(document).ajaxSend(function(){ ... });",
            "url": "http://api.jquery.com/ajaxSend/"
        },
        ".ajaxStart()": {
            "title": ".ajaxStart()",
            "description": "Register a handler to be called when the first Ajax request begins. Whenever an Ajax request is about to be sent, jQuery checks whether there are any other outstanding Ajax requests. If none are in progress, jQuery triggers the <code>ajaxStart</code> event. Any and all handlers that have been registered with the <code>.ajaxStart()</code> method are executed at this time.",
            "code": "$(document).ajaxStart(function(){ ... });",
            "url": "http://api.jquery.com/ajaxStart/"
        },
        ".ajaxStop()": {
            "title": ".ajaxStop()",
            "description": "Register a handler to be called when all Ajax requests have completed. Whenever an Ajax request completes, jQuery checks whether there are any other outstanding Ajax requests. If none remain, jQuery triggers the <code>ajaxStop</code> event. Any and all handlers that have been registered with the <code>.ajaxStop()</code> method are executed at this time. The <code>ajaxStop</code> event is also triggered if the last outstanding Ajax request is cancelled by returning false within the <code>beforeSend</code> callback function.",
            "code": "$(document).ajaxStop(function(){ ... });",
            "url": "http://api.jquery.com/ajaxStop/"
        },
        ".ajaxSuccess()": {
            "title": ".ajaxSuccess()",
            "description": "Attach a function to be executed whenever an Ajax request completes successfully. Whenever an Ajax request completes successfully, jQuery triggers the <code>ajaxSuccess</code> event. Any and all handlers that have been registered with the <code>.ajaxSuccess()</code> method are executed at this time.",
            "code": "$(document).ajaxSuccess(function(){ ... });",
            "url": "http://api.jquery.com/ajaxSuccess/"
        },
        ".animate()": {
            "title": ".animate()",
            "description": "Perform a custom animation of a set of CSS properties. The <code>.animate()</code> method allows us to create animation effects on any numeric CSS property. The only required parameter is a plain object of CSS properties. This object is similar to the one that can be sent to the <code>.css()</code> method, except that the range of properties is more restrictive.",
            "code": " $('#block').animate({width:'70%',opacity: 0.4,},1500);",
            "url": "http://api.jquery.com/animate/"
        },
        ":animated Selector": {
            "title": ":animated Selector",
            "description": "Select all elements that are in the progress of an animation at the time the selector is run.",
            "code": "$('div:animated').toggleClass('colored');",
            "url": "http://api.jquery.com/animated-selector/"
        },
        ".append()": {
            "title": ".append()",
            "description": "Insert content, specified by the parameter, to the end of each element in the set of matched elements. The <code>.append()</code> method inserts the specified content as the last child of each element in the jQuery collection (To insert it as the <em>first</em> child, use <code>.prepend()</code>).",
            "code": "$('.inner').append('&lt;p&gt;Test&lt;/p&gt;');",
            "url": "http://api.jquery.com/append/"
        },
        ".appendTo()": {
            "title": ".appendTo()",
            "description": "Insert every element in the set of matched elements to the end of the target. The <code>.append()</code> and <code>.appendTo()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With <code>.append()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.appendTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.",
            "code": "$('&lt;p&gt;Test&lt;/p&gt;').appendTo('.inner');",
            "url": "http://api.jquery.com/appendTo/"
        },
        ".attr()": {
            "title": ".attr()",
            "description": "Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for the set of matched elements. The <code>.attr()</code> method gets the attribute value for only the first element in the matched set. To get the value for each element individually, use a looping construct such as jQuery's <code>.each()</code> or <code>.map()</code> method. The <code>.attr()</code> method is also a convenient way to set the value of attributes — especially when setting multiple attributes or using values returned by a function.",
            "code": "$('#photo').attr('alt','Beijing');",
            "url": "http://api.jquery.com/attr/"
        },
        "Attribute Contains Prefix Selector": {
            "title": "Attribute Contains Prefix Selector",
            "description": "Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-). This selector was introduced into the CSS specification to handle language attributes.",
            "code": "$('a[hreflang|=&quot;en&quot;]').css('color','green');",
            "url": "http://api.jquery.com/attribute-contains-prefix-selector/"
        },
        "Attribute Contains Selector": {
            "title": "Attribute Contains Selector",
            "description": "Selects elements that have the specified attribute with a value containing the a given substring. This is the most generous of the jQuery attribute selectors that match against a value. It will select an element if the selector's string appears anywhere within the element's attribute value. Compare this selector with the Attribute Contains Word selector, which is more appropriate in many cases.",
            "code": "$('input[name*=&quot;man&quot;]').val('has man in it!');",
            "url": "http://api.jquery.com/attribute-contains-selector/"
        },
        "Attribute Contains Word Selector": {
            "title": "Attribute Contains Word Selector",
            "description": "Selects elements that have the specified attribute with a value containing a given word, delimited by spaces. This selector matches the test string against each word in the attribute value, where a 'word' is defined as a string delimited by whitespace. The selector matches if the test string is exactly equal to any of the words.",
            "code": "$('input[name~=&quot;man&quot;]').val('mr. man is in it!');",
            "url": "http://api.jquery.com/attribute-contains-word-selector/"
        },
        "Attribute Ends With Selector": {
            "title": "Attribute Ends With Selector",
            "description": "Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.",
            "code": "$('input[name$=&quot;letter&quot;]').val('a letter');",
            "url": "http://api.jquery.com/attribute-ends-with-selector/"
        },
        "Attribute Equals Selector": {
            "title": "Attribute Equals Selector",
            "description": "Selects elements that have the specified attribute with a value exactly equal to a certain value.",
            "code": "$('input[value=&quot;Hot Fuzz&quot;]').next().text(&quot;Hot Fuzz&quot;);",
            "url": "http://api.jquery.com/attribute-equals-selector/"
        },
        "Attribute Not Equal Selector": {
            "title": "Attribute Not Equal Selector",
            "description": "Select elements that either don't have the specified attribute, or do have the specified attribute but not with a certain value. This selector is equivalent to <code>:not([attr='value'])</code>.",
            "code": "$('input[name!=&quot;newsletter&quot;]').append('no newsletter');",
            "url": "http://api.jquery.com/attribute-not-equal-selector/"
        },
        "Attribute Starts With Selector": {
            "title": "Attribute Starts With Selector",
            "description": "Selects elements that have the specified attribute with a value beginning exactly with a given string. This selector can be useful for identifying elements in pages produced by server-side frameworks that produce HTML with systematic element IDs. However it will be slower than using a class selector so leverage classes, if you can, to group like elements.",
            "code": "$('input[name^=&quot;news&quot;]').val('news here!');",
            "url": "http://api.jquery.com/attribute-starts-with-selector/"
        },
        "All Selector": {
            "title": "All Selector",
            "description": "Selects all elements. Caution: The all, or universal, selector is extremely slow, except when used by itself.",
            "code": "$('*').css('color','red');",
            "url": "http://api.jquery.com/all-selector/"
        },
        ".before()": {
            "title": ".before()",
            "description": "Insert content, specified by the parameter, before each element in the set of matched elements. The <code>.before()</code> and <code>.insertBefore()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With <code>.before()</code>, the selector expression preceding the method is the container before which the content is inserted. With <code>.insertBefore()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted before the target container.",
            "code": "$('.inner').before('&lt;p&gt;Test&lt;/p&gt;');",
            "url": "http://api.jquery.com/before/"
        },
        ".blur()": {
            "title": ".blur()",
            "description": "Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('blur', handler)</code> and <code>.trigger('blur')</code>. The <code>blur</code> event is sent to an element when it loses focus. Originally, this event was only applicable to form elements, such as <code>&lt;input&gt;</code>. In recent browsers, the domain of the event has been extended to include all element types. An element can lose focus via keyboard commands, such as the Tab key, or by mouse clicks elsewhere on the page.",
            "code": "$('#target').blur();",
            "url": "http://api.jquery.com/blur/"
        },
        ":button Selector": {
            "title": ":button Selector",
            "description": "Selects all button elements and elements of type button. An equivalent selector to <code>$(':button')</code> using valid CSS is <code>$('button, input[type=\"button\"]')</code>.",
            "code": "$(':button').addClass('marked');",
            "url": "http://api.jquery.com/button-selector/"
        },
        "callbacks.add()": {
            "title": "callbacks.add()",
            "description": "Add a callback or a collection of callbacks to a callback list. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.add(foo);",
            "url": "http://api.jquery.com/callbacks.add/"
        },
        "callbacks.disable()": {
            "title": "callbacks.disable()",
            "description": "Disable a callback list from doing anything more. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.disable();",
            "url": "http://api.jquery.com/callbacks.disable/"
        },
        "callbacks.disabled()": {
            "title": "callbacks.disabled()",
            "description": "Determine if the callbacks list has been disabled.",
            "code": "console.log (callbacks.disabled());",
            "url": "http://api.jquery.com/callbacks.disabled/"
        },
        "callbacks.empty()": {
            "title": "callbacks.empty()",
            "description": "Remove all of the callbacks from a list. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.empty();",
            "url": "http://api.jquery.com/callbacks.empty/"
        },
        "callbacks.fire()": {
            "title": "callbacks.fire()",
            "description": "Call all of the callbacks with the given arguments. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.fire('hello');",
            "url": "http://api.jquery.com/callbacks.fire/"
        },
        "callbacks.fired()": {
            "title": "callbacks.fired()",
            "description": "Determine if the callbacks have already been called at least once. Use <code>callbacks.fired()</code> to determine if the callbacks in a list have been called at least once.",
            "code": "console.log(callbacks.fired());",
            "url": "http://api.jquery.com/callbacks.fired/"
        },
        "callbacks.fireWith()": {
            "title": "callbacks.fireWith()",
            "description": "Call all callbacks in a list with the given context and arguments. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.fireWith(window,['foo','bar']);",
            "url": "http://api.jquery.com/callbacks.fireWith/"
        },
        "callbacks.has()": {
            "title": "callbacks.has()",
            "description": "Determine whether a supplied callback is in a list.",
            "code": "console.log(callbacks.has(foo));",
            "url": "http://api.jquery.com/callbacks.has/"
        },
        "callbacks.lock()": {
            "title": "callbacks.lock()",
            "description": "Lock a callback list in its current state. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.lock();",
            "url": "http://api.jquery.com/callbacks.lock/"
        },
        "callbacks.locked()": {
            "title": "callbacks.locked()",
            "description": "Determine if the callbacks list has been locked.",
            "code": "console.log(callbacks.locked());",
            "url": "http://api.jquery.com/callbacks.lock/"
        },
        "callbacks.remove()": {
            "title": "callbacks.remove()",
            "description": "Remove a callback or a collection of callbacks from a callback list. This method returns the Callbacks object onto which it is attached (<code>this</code>).",
            "code": "callbacks.remove(foo);",
            "url": "http://api.jquery.com/callbacks.remove/"
        },
        ".change()": {
            "title": ".change()",
            "description": "Bind an event handler to the 'change' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('change', handler)</code> and <code>.trigger('change')</code>. The <code>change</code> event is sent to an element when its value changes. This event is limited to <code>&lt;input&gt;</code> elements, <code>&lt;textarea&gt;</code> boxes and <code>&lt;select&gt;</code> elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.",
            "code": "$('.target').change();",
            "url": "http://api.jquery.com/change/"
        },
        ":checkbox Selector": {
            "title": ":checkbox Selector",
            "description": "Selects all elements of type checkbox. <code>$(':checkbox')</code> is equivalent to <code>$('[type=checkbox]')</code>. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector <code>*</code> is implied. In other words, the bare <code>$(':checkbox')</code> is equivalent to <code>$('*:checkbox')</code>, so <code>$('input:checkbox')</code> should be used instead.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/checkbox-selector/"
        },
        ":checked Selector": {
            "title": ":checked Selector",
            "description": "Matches all elements that are checked. The <code>:checked</code> selector works for checkboxes and radio buttons. For select elements, use the <code>:selected</code> selector.",
            "code": "$('input:checked').length;",
            "url": "http://api.jquery.com/checked-selector/"
        },
        "Child Selector": {
            "title": "Child Selector",
            "description": "Selects all direct child elements specified by 'child' of elements specified by 'parent'.",
            "code": "$('ul.topnav > li').css('color','red');",
            "url": "http://api.jquery.com/child-selector/"
        },
        ".children()": {
            "title": ".children()",
            "description": "Get the children of each element in the set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.children()</code> method allows us to search through the children of these elements in the DOM tree and construct a new jQuery object from the matching elements.",
            "code": "$('ul.level-2').children().css('color','red');",
            "url": "http://api.jquery.com/children/"
        },
        "Class Selector": {
            "title": "Class Selector",
            "description": "Selects all elements with the given class. For class selectors, jQuery uses JavaScript's native <code>getElementsByClassName()</code> function if the browser supports it.",
            "code": "$('.myClass').css('color','red');",
            "url": "http://api.jquery.com/class-selector/"
        },
        ".clearQueue()": {
            "title": ".clearQueue()",
            "description": "Remove from the queue all items that have not yet been run. When the <code>.clearQueue()</code> method is called, all functions on the queue that have not been executed are removed from the queue. When used without an argument, <code>.clearQueue()</code> removes the remaining functions from <code>fx</code>, the standard effects queue. In this way it is similar to <code>.stop(true)</code>. However, while the <code>.stop()</code> method is meant to be used only with animations, <code>.clearQueue()</code> can also be used to remove any function that has been added to a generic jQuery queue with the <code>.queue()</code> method.",
            "code": "myDiv.clearQueue();",
            "url": "http://api.jquery.com/clearQueue/"
        },
        ".click()": {
            "title": ".click()",
            "description": "Bind an event handler to the 'click' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('click', handler)</code> and <code>.trigger('click')</code>. The <code>click</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed and released. Any HTML element can receive this event.",
            "code": "$('#target').click(function(){ ... });",
            "url": "http://api.jquery.com/click/"
        },
        ".clone()": {
            "title": ".clone()",
            "description": "Create a deep copy of the set of matched elements. The <code>.clone()</code> method performs a deep copy of the set of matched elements, meaning that it copies the matched elements as well as all of their descendant elements and text nodes. When used in conjunction with one of the insertion methods, <code>.clone()</code> is a convenient way to duplicate elements on a page.",
            "code": "$('.hello').clone().appendTo('.goodbye');",
            "url": "http://api.jquery.com/clone/"
        },
        ".closest()": {
            "title": ".closest()",
            "description": "For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree. Given a jQuery object that represents a set of DOM elements, the <code>.closest()</code> method searches through these elements and their ancestors in the DOM tree and constructs a new jQuery object from the matching elements. The <code>.parents()</code> and <code>.closest()</code> methods are similar in that they both traverse up the DOM tree. The differences between the two, though subtle, are significant.",
            "code": "$('li.item').closest('li').css('color','red');",
            "url": "http://api.jquery.com/closest/"
        },
        ":contains() Selector": {
            "title": ":contains() Selector",
            "description": "Select all elements that contain the specified text. The matching text can appear directly within the selected element, in any of that element's descendants, or a combination thereof. As with attribute value selectors, text inside the parentheses of <code>:contains()</code> can be written as a bare word or surrounded by quotation marks. The text must have matching case to be selected.",
            "code": "$('div:contains('John')').css('color','green');",
            "url": "http://api.jquery.com/contains-selector/"
        },
        ".contents()": {
            "title": ".contents()",
            "description": "Get the children of each element in the set of matched elements, including text and comment nodes. Given a jQuery object that represents a set of DOM elements, the <code>.contents()</code> method allows us to search throughthe immediate children of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.contents()</code> and <code>.children()</code> methods are similar, except that the former includes text nodes as well as HTML elements in the resulting jQuery object.",
            "code": "$('#frame').contents().find('a').css('color','red');",
            "url": "http://api.jquery.com/contents/"
        },
        ".context": {
            "title": ".context",
            "description": "The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/context/"
        },
        ".css()": {
            "title": ".css()",
            "description": "Get the value of style properties for the first element in the set of matched elements or set one or more CSS properties for the set of matched elements.",
            "code": "$('a').css('color');<br>$('a').css('color','red');",
            "url": "http://api.jquery.com/css/"
        },
        ".data()": {
            "title": ".data()",
            "description": "Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.",
            "code": "$('body').data('foo', 52);",
            "url": "http://api.jquery.com/data/"
        },
        ".dblclick()": {
            "title": ".dblclick()",
            "description": "Bind an event handler to the 'dblclick' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('dblclick', handler)</code> and <code>.trigger('dblclick')</code>. The <code>dblclick</code> event is sent to an element when the element is double-clicked. Any HTML element can receive this event.",
            "code": "$('#target').dblclick(function(){ ... });",
            "url": "http://api.jquery.com/dblclick/"
        },
        "deferred.always()": {
            "title": "deferred.always()",
            "description": "Add handlers to be called when the Deferred object is either resolved or rejected. The argument can be either a single function or an array of functions.",
            "code": "$.get('test.php').always(function(){ ...});",
            "url": "http://api.jquery.com/deferred.always/"
        },
        "deferred.done()": {
            "title": "deferred.done()",
            "description": "Add handlers to be called when the Deferred object is resolved. The <code>deferred.done()</code> method accepts one or more arguments, all of which can be either a single function or an array of functions.",
            "code": "$.get('test.php').done(function(){ ... });",
            "url": "http://api.jquery.com/deferred.done/"
        },
        "deferred.fail()": {
            "title": "deferred.fail()",
            "description": "Add handlers to be called when the Deferred object is rejected. The <code>deferred.fail()</code> method accepts one or more arguments, all of which can be either a single function or an array of functions.",
            "code": "$.get('test.php').fail(function(){ ... });",
            "url": "http://api.jquery.com/deferred.fail/"
        },
        "deferred.notify()": {
            "title": "deferred.notify()",
            "description": "Call the progressCallbacks on a Deferred object with the given args. Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state or reporting status by returning a restricted Promise object through deferred.promise().",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.notify/"
        },
        "deferred.notifyWith()": {
            "title": "deferred.notifyWith()",
            "description": "Call the progressCallbacks on a Deferred object with the given context and args. Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state or reporting status by returning a restricted Promise object through deferred.promise().",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.notifyWith/"
        },
        "deferred.progress()": {
            "title": "deferred.progress()",
            "description": "Add handlers to be called when the Deferred object generates progress notifications. The argument can be either a single function or an array of functions.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.progress/"
        },
        "deferred.promise()": {
            "title": "deferred.promise()",
            "description": "Return a Deferred's Promise object. The <code>deferred.promise()</code> method allows an asynchronous function to prevent other code from interfering with the progress or status of its internal request.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.promise/"
        },
        "deferred.reject()": {
            "title": "deferred.reject()",
            "description": "Reject a Deferred object and call any failCallbacks with the given args. Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <code>deferred.promise()</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.reject/"
        },
        "deferred.rejectWith()": {
            "title": "deferred.rejectWith()",
            "description": "Reject a Deferred object and call any failCallbacks with the given context and args. Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <code>deferred.promise()</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.rejectWith/"
        },
        "deferred.resolve()": {
            "title": "deferred.resolve()",
            "description": "Resolve a Deferred object and call any doneCallbacks with the given args. When the Deferred is resolved, any doneCallbacks added by <code>deferred.then</code> or <code>deferred.done</code> are called. Callbacks are executed in the order they were added.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.resolve/"
        },
        "deferred.resolveWith()": {
            "title": "deferred.resolveWith()",
            "description": "Resolve a Deferred object and call any doneCallbacks with the given context and args. Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <code>deferred.promise()</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.resolveWith/"
        },
        "deferred.state()": {
            "title": "deferred.state()",
            "description": "Determine the current state of a Deferred object. The deferred.state() method returns a string representing the current state of the Deferred object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/deferred.state/"
        },
        "deferred.then()": {
            "title": "deferred.then()",
            "description": "Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.",
            "code": "$.get('test.php').then(function(){ ... });",
            "url": "http://api.jquery.com/deferred.then/"
        },
        ".delay()": {
            "title": ".delay()",
            "description": "Set a timer to delay execution of subsequent items in the queue. The <code>.delay()</code> method allows us to delay the execution of functions that follow it in the queue. It can be used with the standard effects queue or with a custom queue. Durations are given in milliseconds.",
            "code": "$('#foo').slideUp(300).delay(800).fadeIn(400);",
            "url": "http://api.jquery.com/delay/"
        },
        ".dequeue()": {
            "title": ".dequeue()",
            "description": "Execute the next function on the queue for the matched elements. When <code>.dequeue()</code> is called, the next function on the queue is removed from the queue, and then executed. This function should in turn (directly or indirectly) cause <code>.dequeue()</code> to be called, so that the sequence can continue.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/dequeue/"
        },
        "Descendant Selector": {
            "title": "Descendant Selector",
            "description": "Selects all elements that are descendants of a given ancestor. A descendant of an element could be a child, grandchild, great-grandchild, and so on, of that element.",
            "code": "$('form input').css('color','blue');",
            "url": "http://api.jquery.com/descendant-selector/"
        },
        ".detach()": {
            "title": ".detach()",
            "description": "Remove the set of matched elements from the DOM. The <code>.detach()</code> method is the same as <code>.remove()</code>, except that <code>.detach()</code> keeps all jQuery data associated with the removed elements. This method is useful when removed elements are to be reinserted into the DOM at a later time.",
            "code": "$('p').detach();",
            "url": "http://api.jquery.com/detach/"
        },
        ".die()": {
            "title": ".die()",
            "description": "Remove event handlers previously attached using .live() from the elements. Any handler that has been attached with <code>.live()</code> can be removed with <code>.die()</code>. This method is analogous to calling <code>.off()</code> with no arguments, which is used to remove all handlers attached with <code>.on()</code>.",
            "code": "$('p').die('click')",
            "url": "http://api.jquery.com/die/"
        },
        ":disabled Selector": {
            "title": ":disabled Selector",
            "description": "Selects all elements that are disabled. As with other pseudo-class selectors (those that begin with a ':'), it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':disabled')</code> is equivalent to <code>$('*:disabled')</code>, so <code>$('input:disabled')</code> or similar should be used instead.",
            "code": "$('input:disabled').val('this is it');",
            "url": "http://api.jquery.com/disabled-selector/"
        },
        ".each()": {
            "title": ".each()",
            "description": "Iterate over a jQuery object, executing a function for each matched element. The <code>.each()</code> method is designed to make DOM looping constructs concise and less error-prone. When called it iterates over the DOM elements that are part of the jQuery object. Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword <code>this</code> refers to the element.",
            "code": "$('li').each(function(){ ... });",
            "url": "http://api.jquery.com/each/"
        },
        "Element Selector": {
            "title": "Element Selector",
            "description": "Selects all elements with the given tag name. JavaScript's <code>getElementsByTagName()</code> function is called to return the appropriate elements when this expression is used.",
            "code": "$('div').css('color','red');",
            "url": "http://api.jquery.com/element-selector/"
        },
        ".empty()": {
            "title": ".empty()",
            "description": "Remove all child nodes of the set of matched elements from the DOM. This method removes not only child (and other descendant) elements, but also any text within the set of matched elements. This is because, according to the DOM specification, any string of text within an element is considered a child node of that element.",
            "code": "$('.hello').empty();",
            "url": "http://api.jquery.com/empty/"
        },
        ":empty Selector": {
            "title": ":empty Selector",
            "description": "Select all elements that have no children (including text nodes). This is the inverse of <code>:parent</code>.",
            "code": "$('td:empty').css('background','red');",
            "url": "http://api.jquery.com/empty-selector/"
        },
        ":enabled Selector": {
            "title": ":enabled Selector",
            "description": "Selects all elements that are enabled. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':enabled')</code> is equivalent to <code>$('*:enabled')</code>, so <code>$('input:enabled')</code> or similar should be used instead.",
            "code": "$('input:enabled').val('this is it');",
            "url": "http://api.jquery.com/enabled-selector/"
        },
        ".end()": {
            "title": ".end()",
            "description": "End the most recent filtering operation in the current chain and return the set of matched elements to its previous state. Most of jQuery's DOM traversal methods operate on a jQuery object instance and produce a new one, matching a different set of DOM elements. When this happens, it is as if the new set of elements is pushed onto a stack that is maintained inside the object. Each successive filtering method pushes a new element set onto the stack. If we need an older element set, we can use <code>end()</code> to pop the sets back off of the stack.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/end/"
        },
        ".eq()": {
            "title": ".eq()",
            "description": "Reduce the set of matched elements to the one at the specified index. Given a jQuery object that represents a set of DOM elements, the <code>.eq()</code> method constructs a new jQuery object from one element within that set. The supplied index identifies the position of this element in the set.",
            "code": "$('li').eq(2).css('color','red');",
            "url": "http://api.jquery.com/eq/"
        },
        ":eq() Selector": {
            "title": ":eq() Selector",
            "description": "Select the element at index <code>n</code> within the matched set.",
            "code": "$('td:eq(2)').css('color','red');",
            "url": "http://api.jquery.com/eq-selector/"
        },
        ".error()": {
            "title": ".error()",
            "description": "Bind an event handler to the 'error' JavaScript event. This method is a shortcut for <code>.on('error', handler)</code>.",
            "code": "$('#book').error(function(){ ... });",
            "url": "http://api.jquery.com/error/"
        },
        ":even Selector": {
            "title": ":even Selector",
            "description": "Selects even elements, zero-indexed. In particular, note that the 0-based indexing means that, counter-intuitively, <code>:even</code> selects the first element, third element, and so on within the matched set.",
            "code": "$('tr:even').css('color','red');",
            "url": "http://api.jquery.com/even-selector/"
        },
        "event.currentTarget": {
            "title": "event.currentTarget",
            "description": "The current DOM element within the event bubbling phase. This property will typically be equal to the <code>this</code> of the function.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.currentTarget/"
        },
        "event.data": {
            "title": "event.data",
            "description": "An optional object of data passed to an event method when the current executing handler is bound.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.data/"
        },
        "event.delegateTarget": {
            "title": "event.delegateTarget",
            "description": "The element where the currently-called jQuery event handler was attached. This property is most often useful in delegated events attached by <code>.delegate()</code> or <code>.on()</code>, where the event handler is attached at an ancestor of the element being processed. It can be used, for example, to identify and remove event handlers at the delegation point.",
            "code": "$(event.delegateTarget).css('color','red');",
            "url": "http://api.jquery.com/event.delegateTarget/"
        },
        "event.isDefaultPrevented()": {
            "title": "event.isDefaultPrevented()",
            "description": "Returns whether <code>event.preventDefault()</code> was ever called on this event object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.isDefaultPrevented/"
        },
        "event.isImmediatePropagationStopped()": {
            "title": "event.isImmediatePropagationStopped()",
            "description": "Returns whether <code>event.stopImmediatePropagation()</code> was ever called on this event object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.isImmediatePropagationStopped/"
        },
        "event.isPropagationStopped()": {
            "title": "event.isPropagationStopped()",
            "description": "Returns whether <code>event.stopPropagation()</code> was ever called on this event object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.isPropagationStopped/"
        },
        "event.metaKey": {
            "title": "event.metaKey",
            "description": "Indicates whether the META key was pressed when the event fired. Returns a boolean value (<code>true</code> or <code>false</code>) that indicates whether or not the <kbd>META</kbd> key was pressed at the time the event fired. This key might map to an alternative key name on some platforms.",
            "code": "$('#display').text(e.metaKey);",
            "url": "http://api.jquery.com/event.metaKey/"
        },
        "event.namespace": {
            "title": "event.namespace",
            "description": "The namespace specified when the event was triggered. This will likely be used primarily by plugin authors who wish to handle tasks differently depending on the event namespace use",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.namespace/"
        },
        "event.pageX": {
            "title": "event.pageX",
            "description": "The mouse position relative to the left edge of the document.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.pageX/"
        },
        "event.pageY": {
            "title": "event.pageY",
            "description": "The mouse position relative to the top edge of the document.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.pageY/"
        },
        "event.preventDefault()": {
            "title": "event.preventDefault()",
            "description": "If this method is called, the default action of the event will not be triggered. For example, clicked anchors will not take the browser to a new URL. We can use <code>event.isDefaultPrevented()</code> to determine if this method has been called by an event handler that was triggered by this event.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.preventDefault/"
        },
        "event.relatedTarget": {
            "title": "event.relatedTarget",
            "description": "The other DOM element involved in the event, if any. For <code>mouseout</code>, indicates the element being entered; for <code>mouseover</code>, indicates the element being exited.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.relatedTarget/"
        },
        "event.result": {
            "title": "event.result",
            "description": "The last value returned by an event handler that was triggered by this event, unless the value was <code>undefined</code>. This property can be useful for getting previous return values of custom events.",
            "code": "$('p').html( event.result );",
            "url": "http://api.jquery.com/event.result/"
        },
        "event.stopImmediatePropagation()": {
            "title": "event.stopImmediatePropagation()",
            "description": "Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree. In addition to keeping any additional handlers on an element from being executed, this method also stops the bubbling by implicitly calling <code>event.stopPropagation()</code>. To simply prevent the event from bubbling to ancestor elements but allow other event handlers to execute on the same element, we can use <code>event.stopPropagation()</code> instead.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.stopImmediatePropagation/"
        },
        "event.stopPropagation()": {
            "title": "event.stopPropagation()",
            "description": "Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event. We can use <code>event.isPropagationStopped()</code> to determine if this method was ever called (on that event object).",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.stopPropagation/"
        },
        "event.target": {
            "title": "event.target",
            "description": "The DOM element that initiated the event. The <code>target</code> property can be the element that registered for the event or a descendant of it. It is often useful to compare <code>event.target</code> to <code>this</code> in order to determine if the event is being handled due to event bubbling. This property is very useful in event delegation, when events bubble.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.target/"
        },
        "event.timeStamp": {
            "title": "event.timeStamp",
            "description": "The difference in milliseconds between the time the browser created the event and January 1, 1970. This property can be useful for profiling event performance by getting the <code>event.timeStamp</code> value at two points in the code and noting the difference. To simply determine the current time inside an event handler, use <code>(new Date).getTime()</code> instead.",
            "code": "var last = event.timeStamp;",
            "url": "http://api.jquery.com/event.timeStamp/"
        },
        "event.type": {
            "title": "event.type",
            "description": "Describes the nature of the event.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.type/"
        },
        "event.which": {
            "title": "event.which",
            "description": "For key or mouse events, this property indicates the specific key or button that was pressed. The <code>event.which</code> property normalizes <code>event.keyCode</code> and <code>event.charCode</code>. It is recommended to watch <code>event.which</code> for keyboard key input.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/event.which/"
        },
        ".fadeIn()": {
            "title": ".fadeIn()",
            "description": "Display the matched elements by fading them to opaque. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.",
            "code": "$('#book').fadeIn('slow');",
            "url": "http://api.jquery.com/fadeIn/"
        },
        ".fadeOut()": {
            "title": ".fadeOut()",
            "description": "Hide the matched elements by fading them to transparent. Once the opacity reaches 0, the <code>display</code> style property is set to <code>none</code>, so the element no longer affects the layout of the page. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.",
            "code": "$('#book').fadeOut('slow');",
            "url": "http://api.jquery.com/fadeOut/"
        },
        ".fadeTo()": {
            "title": ".fadeTo()",
            "description": "Adjust the opacity of the matched elements. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, the default duration of 400 milliseconds is used. Unlike the other effect methods, <code>.fadeTo()</code> requires that <code>duration</code> be explicitly specified.",
            "code": "$('#book').fadeTo('slow',0.5);",
            "url": "http://api.jquery.com/fadeTo/"
        },
        ".fadeToggle()": {
            "title": ".fadeToggle()",
            "description": "Display or hide the matched elements by animating their opacity. When called on a visible element, the element's <code>display</code> style property is set to <code>none</code> once the opacity reaches 0, so the element no longer affects the layout of the page. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.",
            "code": "$('p').fadeToggle('fast');",
            "url": "http://api.jquery.com/fadeToggle/"
        },
        ":file Selector": {
            "title": ":file Selector",
            "description": "Selects all elements of type file. <code>:file</code> is equivalent to <code>[type='file']</code>. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':file')</code> is equivalent to <code>$('*:file')</code>, so <code>$('input:file')</code> should be used instead.",
            "code": "$('input:file').css('color','red');",
            "url": "http://api.jquery.com/file-selector/"
        },
        ".filter()": {
            "title": ".filter()",
            "description": "Reduce the set of matched elements to those that match the selector or pass the function's test. Given a jQuery object that represents a set of DOM elements, the <code>.filter()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; all elements matching the selector will be included in the result.",
            "code": "$('li').filter(':even').css('color','red');",
            "url": "http://api.jquery.com/filter/"
        },
        ".find()": {
            "title": ".find()",
            "description": "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element. Given a jQuery object that represents a set of DOM elements, the <code>.find()</code> method allows us to search through the descendants of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.find()</code> and <code>.children()</code> methods are similar, except that the latter only travels a single level down the DOM tree.",
            "code": "$('li.item').find('li').css('color','red');",
            "url": "http://api.jquery.com/find/"
        },
        ".finish()": {
            "title": ".finish()",
            "description": "Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements. When <code>.finish()</code> is called on an element, the currently-running animation and all queued animations (if any) immediately stop and their CSS properties set to their target values. All queued animations are removed.",
            "code": "$('div.box').finish();",
            "url": "http://api.jquery.com/finish/"
        },
        ".first()": {
            "title": ".first()",
            "description": "Reduce the set of matched elements to the first in the set. Given a jQuery object that represents a set of DOM elements, the <code>.first()</code> method constructs a new jQuery object from the first element in that set.",
            "code": "$('li').first().css('color','red');",
            "url": "http://api.jquery.com/first/"
        },
        ":first-child Selector": {
            "title": ":first-child Selector",
            "description": "Selects all elements that are the first child of their parent. While <code>:first</code> matches only a single element, the <code>:first-child</code> selector can match more than one: one for each parent. This is equivalent to <code>:nth-child(1)</code>.",
            "code": "$('div span:first-child').css('color','red');",
            "url": "http://api.jquery.com/first-child-selector/"
        },
        ":first-of-type Selector": {
            "title": ":first-of-type Selector",
            "description": "Selects all elements that are the first among siblings of the same element name. The <code>:first-of-type</code> selector matches elements that have no other element with both the same parent and the same element name coming before it in the document tree.",
            "code": "$('span:first-of-type').addClass('fot');",
            "url": "http://api.jquery.com/first-of-type-selector/"
        },
        ":first Selector": {
            "title": ":first Selector",
            "description": "Selects the first matched element. The <code>:first</code> pseudo-class is equivalent to <code>:eq(0)</code>. It could also be written as <code>:lt(1)</code>. While this matches only a single element, <code>:first-child</code> can match more than one: One for each parent.",
            "code": "$('tr:first').css('font-style','italic');",
            "url": "http://api.jquery.com/first-selector/"
        },
        ".focus()": {
            "title": ".focus()",
            "description": "Bind an event handler to the 'focus' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('focus', handler)</code> and <code>.trigger('focus')</code>. The focus event is sent to an element when it gains focus.",
            "code": "$('#target').focus(function(){ ... });",
            "url": "http://api.jquery.com/focus/"
        },
        ":focus Selector": {
            "title": ":focus Selector",
            "description": "Selects element if it is currently focused. As with other pseudo-class selectors (those that begin with a ':'), it is recommended to precede <code>:focus</code> with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':focus')</code> is equivalent to <code>$('*:focus')</code>. If you are looking for the currently focused element, <code>$( document.activeElement )</code> will retrieve it without having to search the whole DOM tree.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/focus-selector/"
        },
        ".focusin()": {
            "title": ".focusin()",
            "description": "Bind an event handler to the 'focusin' event. This method is a shortcut for <code>.on('focusin', handler)</code>. The <code>focusin</code> event is sent to an element when it, or any element inside of it, gains focus. This is distinct from the <code>focus</code> event in that it supports detecting the focus event on parent elements (in other words, it supports event bubbling).",
            "code": "$('p').focusin(function(){ ... });",
            "url": "http://api.jquery.com/focusin/"
        },
        ".focusout()": {
            "title": ".focusout()",
            "description": "Bind an event handler to the 'focusout' JavaScript event. This method is a shortcut for <code>.on('focusout', handler)</code>. The <code>focusout</code> event is sent to an element when it, or any element inside of it, loses focus. This is distinct from the <code>blur</code> event in that it supports detecting the loss of focus on descendant elements (in other words, it supports event bubbling).",
            "code": "$('p').focusout(function(){ ... });",
            "url": "http://api.jquery.com/focusout/"
        },
        ".get()": {
            "title": ".get()",
            "description": "Retrieve the DOM elements matched by the jQuery object. The <code>.get()</code> method grants us access to the DOM nodes underlying each jQuery object.",
            "code": "$('li').get();",
            "url": "http://api.jquery.com/get/"
        },
        ":gt() Selector": {
            "title": ":gt() Selector",
            "description": "Select all elements at an index greater than index within the matched set.",
            "code": "$('td:gt(4)').css('color','red');",
            "url": "http://api.jquery.com/gt-selector/"
        },
        ".has()": {
            "title": ".has()",
            "description": "Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element. Given a jQuery object that represents a set of DOM elements, the <code>.has()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against the descendants of the matching elements; the element will be included in the result if any of its descendant elements matches the selector.",
            "code": "$('li').has('ul').css('color','red');",
            "url": "http://api.jquery.com/has/"
        },
        ":Has Attribute Selector": {
            "title": ":Has Attribute Selector",
            "description": "Selects elements that have the specified attribute, with any value.",
            "code": "$('div[id]').one('click',function(){ ... });",
            "url": "http://api.jquery.com/has-attribute-selector/"
        },
        ":has() Selector": {
            "title": ":has() Selector",
            "description": "Selects elements which contain at least one element that matches the specified selector. The expression <code>$('div:has(p)')</code> matches a <code>&lt;div&gt;</code> if a <code>&lt;p&gt;</code> exists anywhere among its descendants, not just as a direct child.",
            "code": "$('div:has(p)').addClass('test');",
            "url": "http://api.jquery.com/has-selector/"
        },
        ".hasClass()": {
            "title": ".hasClass()",
            "description": "Determine whether any of the matched elements are assigned the given class. Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space.",
            "code": "$('#mydiv').hasClass('foo');",
            "url": "http://api.jquery.com/hasClass/"
        },
        ":header Selector": {
            "title": ":header Selector",
            "description": "Selects all elements that are headers, like h1, h2, h3 and so on.",
            "code": "$(':header').css('color','red');",
            "url": "http://api.jquery.com/header-selector/"
        },
        ".height()": {
            "title": ".height()",
            "description": "Get the current computed height for the first element in the set of matched elements or set the CSS height of every matched element.",
            "code": "$('p').height();",
            "url": "http://api.jquery.com/height/"
        },
        ":hidden Selector": {
            "title": ":hidden Selector",
            "description": "Selects all elements that are hidden.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/hidden-selector/"
        },
        ".hide()": {
            "title": ".hide()",
            "description": "Hide the matched elements. With no parameters, the <code>.hide()</code> method is the simplest way to hide an element.",
            "code": "$('.target').hide();",
            "url": "http://api.jquery.com/hide/"
        },
        ".hover()": {
            "title": ".hover()",
            "description": "Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.",
            "code": "$('li').hover(function(){ ... });",
            "url": "http://api.jquery.com/hover/"
        },
        ".html()": {
            "title": ".html()",
            "description": "Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.",
            "code": "$('div.demo-container').html();",
            "url": "http://api.jquery.com/html/"
        },
        "ID Selector": {
            "title": "ID Selector",
            "description": "Selects a single element with the given id attribute. For id selectors, jQuery uses the JavaScript function <code>document.getElementById()</code>, which is extremely efficient.",
            "code": "$('#myDiv').css('color','red');",
            "url": "http://api.jquery.com/id-selector/"
        },
        ":image Selector": {
            "title": ":image Selector",
            "description": "Selects all elements of type image. <code>:image</code> is equivalent to <code>[type='image']</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/image-selector/"
        },
        ".index()": {
            "title": ".index()",
            "description": "Search for a given element from among the matched elements. If no argument is passed to the <code>.index()</code> method, the return value is an integer indicating the position of the first element within the jQuery object relative to its sibling elements.",
            "code": "$('#bar').index();",
            "url": "http://api.jquery.com/index/"
        },
        ".innerHeight()": {
            "title": ".innerHeight()",
            "description": "Get the current computed height for the first element in the set of matched elements, including padding but not border. This method returns the height of the element, including top and bottom padding, in pixels. It is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code>.height()</code> instead.",
            "code": "$('p').innerHeight();",
            "url": "http://api.jquery.com/innerHeight/"
        },
        ".innerWidth()": {
            "title": ".innerWidth()",
            "description": "Get the current computed width for the first element in the set of matched elements, including padding but not border. This method returns the width of the element, including left and right padding, in pixels. It is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code>.width()</code> instead.",
            "code": "$('p').innerWidth();",
            "url": "http://api.jquery.com/innerWidth/"
        },
        ":input Selector": {
            "title": ":input Selector",
            "description": "Selects all input, textarea, select and button elements. The <code>:input</code> selector basically selects all form controls.",
            "code": "var allInputs = $(':input');",
            "url": "http://api.jquery.com/input-selector/"
        },
        ".insertAfter()": {
            "title": ".insertAfter()",
            "description": "Insert every element in the set of matched elements after the target. The <code>.after()</code> and <code>.insertAfter()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With <code>.after()</code>, the selector expression preceding the method is the container after which the content is inserted. With <code>.insertAfter()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted after the target container.",
            "code": "$('<p>Test</p>').insertAfter('.inner');",
            "url": "http://api.jquery.com/insertAfter/"
        },
        ".insertBefore()": {
            "title": ".insertBefore()",
            "description": "Insert every element in the set of matched elements before the target. The <code>.before()</code> and <code>.insertBefore()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With <code>.before()</code>, the selector expression preceding the method is the container before which the content is inserted. With <code>.insertBefore()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted before the target container.",
            "code": "$('<p>Test</p>').insertBefore('.inner');",
            "url": "http://api.jquery.com/insertBefore/"
        },
        ".is()": {
            "title": ".is()",
            "description": "Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments. Unlike other filtering methods, <code>.is()</code> does not create a new jQuery object. Instead, it allows you to test the contents of a jQuery object without modification. This is often useful inside callbacks, such as event handlers.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/is/"
        },
        "jQuery()": {
            "title": "jQuery()",
            "description": "Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery/"
        },
        ".jquery": {
            "title": ".jquery",
            "description": "A string containing the jQuery version number. The <code>.jquery</code> property is assigned to the jQuery prototype, commonly referred to by its alias <code>$.fn</code>. It is a string containing the version number of <code>jQuery</code>, such as '1.5.0' or '1.4.4'.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jquery-2/"
        },
        "jQuery.ajax()": {
            "title": "jQuery.ajax()",
            "description": "Perform an asynchronous HTTP (Ajax) request. The <code>$.ajax()</code> function underlies all Ajax requests sent by jQuery. It is often unnecessary to directly call this function, as several higher-level alternatives like <code>$.get()</code> and <code>.load()</code> are available and are easier to use. If less common options are required, though, <code>$.ajax()</code> can be used more flexibly.",
            "code": "$.ajax();",
            "url": "http://api.jquery.com/jQuery.ajax/"
        },
        "jQuery.ajaxPrefilter()": {
            "title": "jQuery.ajaxPrefilter()",
            "description": "Handle custom Ajax options or modify existing options before each request is sent and before they are processed by <code>$.ajax().</code>",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.ajaxPrefilter/"
        },
        "jQuery.ajaxSetup()": {
            "title": "jQuery.ajaxSetup()",
            "description": "Set default values for future Ajax requests.",
            "code": "$.ajaxSetup({url:'ping.php'});",
            "url": "http://api.jquery.com/jQuery.ajaxSetup/"
        },
        "jQuery.ajaxTransport()": {
            "title": "jQuery.ajaxTransport()",
            "description": "Creates an object that handles the actual transmission of Ajax data. A transport is an object that provides two methods, <code>send</code> and <code>abort</code>, that are used internally by <code>$.ajax()</code> to issue requests. A transport is the most advanced way to enhance <code>$.ajax()</code> and should be used only as a last resort when prefilters and converters are insufficient.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.ajaxTransport/"
        },
        "jQuery.Callbacks()": {
            "title": "jQuery.Callbacks()",
            "description": "A multi-purpose callbacks list object that provides a powerful way to manage callback lists. The <code>$.Callbacks()</code> function is internally used to provide the base functionality behind the jQuery <code>$.ajax()</code> and <code>$.Deferred()</code> components. It can be used as a similar base to define functionality for new components.",
            "code": "$.Callbacks();",
            "url": "http://api.jquery.com/jQuery.Callbacks/"
        },
        "jQuery.contains()": {
            "title": "jQuery.contains()",
            "description": "Check to see if a DOM element is a descendant of another DOM element. The <code>$.contains()</code> method returns <code>true</code> if the DOM element provided by the second argument is a descendant of the DOM element provided by the first argument, whether it is a direct child or nested more deeply. Otherwise, it returns <code>false</code>. Only <em>element</em> nodes are supported; if the second argument is a text or comment node, <code>$.contains()</code> will return <code>false</code>.",
            "code": "$.contains(document.documentElement,document.body);",
            "url": "http://api.jquery.com/jQuery.contains/"
        },
        "jQuery.cssHooks": {
            "title": "jQuery.cssHooks",
            "description": "Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties. The <code>$.cssHooks</code> object provides a way to define functions for getting and setting particular CSS values. It can also be used to create new cssHooks for normalizing CSS3 features such as box shadows and gradients.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.cssHooks/"
        },
        "jQuery.data()": {
            "title": "jQuery.data()",
            "description": "Store arbitrary data associated with the specified element and/or return the value that was set.",
            "code": "jQuery.data(document.body,'foo',52);",
            "url": "http://api.jquery.com/jQuery.data/"
        },
        "jQuery.Deferred()": {
            "title": "jQuery.Deferred()",
            "description": "A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function. The <code>jQuery.Deferred()</code> constructor creates a new Deferred object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.Deferred/"
        },
        "jQuery.dequeue()": {
            "title": "jQuery.dequeue()",
            "description": "Execute the next function on the queue for the matched element. When <code>jQuery.dequeue()</code> is called, the next function on the queue is removed from the queue, and then executed. This function should in turn (directly or indirectly) cause <code>jQuery.dequeue()</code> to be called, so that the sequence can continue.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.dequeue/"
        },
        "jQuery.each()": {
            "title": "jQuery.each()",
            "description": "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.each/"
        },
        "jQuery.error()": {
            "title": "jQuery.error()",
            "description": "Takes a string and throws an exception containing it. This method exists primarily for plugin developers who wish to override it and provide a better display (or more information) for the error messages.",
            "code": "jQuery.error = console.error;",
            "url": "http://api.jquery.com/jQuery.error/"
        },
        "jQuery.extend()": {
            "title": "jQuery.extend()",
            "description": "Merge the contents of two or more objects together into the first object. When two or more objects are supplied to <code>$.extend()</code>, properties from all of the objects are added to the target object.",
            "code": "var object = $.extend({}, object1, object2);",
            "url": "http://api.jquery.com/jQuery.extend/"
        },
        "jQuery.fx.interval": {
            "title": "jQuery.fx.interval",
            "description": "The rate (in milliseconds) at which animations fire. This property can be manipulated to adjust the number of frames per second at which animations will run. The default is 13 milliseconds. Making this a lower number could make the animations run smoother in faster browsers but there may be performance and CPU implications of doing so.",
            "code": "jQuery.fx.interval = 100;",
            "url": "http://api.jquery.com/jQuery.fx.interval/"
        },
        "jQuery.fx.off": {
            "title": "jQuery.fx.off",
            "description": "Globally disable all animations. When this property is set to <code>true</code>, all animation methods will immediately set elements to their final state when called, rather than displaying an effect. Animations can be turned back on by setting the property to false.",
            "code": "$.fx.off = true;",
            "url": "http://api.jquery.com/jQuery.fx.off/"
        },
        "jQuery.get()": {
            "title": "jQuery.get()",
            "description": "Load data from the server using a HTTP GET request.",
            "code": "$.get('test.php');",
            "url": "http://api.jquery.com/jQuery.get/"
        },
        "jQuery.getJSON()": {
            "title": "jQuery.getJSON()",
            "description": "Load JSON-encoded data from the server using a GET HTTP request.",
            "code": "$.getJSON('test.js',function(){ ... });",
            "url": "http://api.jquery.com/jQuery.getJSON/"
        },
        "jQuery.getScript()": {
            "title": "jQuery.getScript()",
            "description": "Load a JavaScript file from the server using a GET HTTP request, then execute it.",
            "code": "$.getScript('test.js',function(){ ... });",
            "url": "http://api.jquery.com/jQuery.getScript/"
        },
        "jQuery.globalEval()": {
            "title": "jQuery.globalEval()",
            "description": "Execute some JavaScript code globally. This method behaves differently from using a normal JavaScript <code>eval()</code> in that it's executed within the global context (which is important for loading external scripts dynamically).",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.globalEval/"
        },
        "jQuery.grep()": {
            "title": "jQuery.grep()",
            "description": "Finds the elements of an array which satisfy a filter function. The original array is not affected. The <code>$.grep()</code> method removes items from an array as necessary so that all remaining items pass a provided test. The test is a function that is passed an array item and the index of the item within the array. Only if the test returns true will the item be in the result array. The filter function will be passed two arguments: the current array item and its index. The filter function must return 'true' to include the item in the result array.",
            "code": "$.grep(array,function(x,y){ ... });",
            "url": "http://api.jquery.com/jQuery.grep/"
        },
        "jQuery.hasData()": {
            "title": "jQuery.hasData()",
            "description": "Determine whether an element has any jQuery data associated with it. The <code>jQuery.hasData()</code> method provides a way to determine if an element currently has any values that were set using <code>jQuery.data()</code>. If no data is associated with an element (there is no data object at all or the data object is empty), the method returns <code>false</code>; otherwise it returns <code>true</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.hasData/"
        },
        "jQuery.holdReady()": {
            "title": "jQuery.holdReady()",
            "description": "Holds or releases the execution of jQuery's ready event. The <code>$.holdReady()</code> method allows the caller to delay jQuery's ready event. This <em>advanced feature</em> would typically be used by dynamic script loaders that want to load additional JavaScript such as jQuery plugins before allowing the ready event to occur, even though the DOM may be ready. This method must be called early in the document, such as in the <code>&lt;head&gt;</code> immediately after the jQuery script tag. Calling this method after the ready event has already fired will have no effect.",
            "code": "$.holdReady(true);",
            "url": "http://api.jquery.com/jQuery.holdReady/"
        },
        "jQuery.inArray()": {
            "title": "jQuery.inArray()",
            "description": "Search for a specified value within an array and return its index (or -1 if not found). The <code>$.inArray()</code> method is similar to JavaScript's native <code>.indexOf()</code> method in that it returns -1 when it doesn't find a match. If the first element within the array matches <code>value</code>, <code>$.inArray()</code> returns 0.",
            "code": "jQuery.inArray('John',array);",
            "url": "http://api.jquery.com/jQuery.inArray/"
        },
        "jQuery.isArray()": {
            "title": "jQuery.isArray()",
            "description": "Determine whether the argument is an array. <code>$.isArray()</code> returns a Boolean indicating whether the object is a JavaScript array (not an array-like object, such as a jQuery object).",
            "code": "$.isArray([]);",
            "url": "http://api.jquery.com/jQuery.isArray/"
        },
        "jQuery.isEmptyObject()": {
            "title": "jQuery.isEmptyObject()",
            "description": "Check to see if an object is empty (contains no enumerable properties). The argument should always be a plain JavaScript <code>Object</code> as other types of object (DOM elements, primitive strings/numbers, host objects) may not give consistent results across browsers. To determine if an object is a plain JavaScript object, use <code>$.isPlainObject()</code>.",
            "code": "jQuery.isEmptyObject({});",
            "url": "http://api.jquery.com/jQuery.isEmptyObject/"
        },
        "jQuery.isFunction()": {
            "title": "jQuery.isFunction()",
            "description": "Determine if the argument passed is a Javascript function object.",
            "code": "$.isFunction(function(){});",
            "url": "http://api.jquery.com/jQuery.isFunction/"
        },
        "jQuery.isNumeric()": {
            "title": "jQuery.isNumeric()",
            "description": "Determines whether its argument is a number. The <code>$.isNumeric()</code> method checks whether its argument represents a numeric value. If so, it returns <code>true</code>. Otherwise it returns <code>false</code>. The argument can be of any type.",
            "code": "$.isNumeric(16);",
            "url": "http://api.jquery.com/jQuery.isNumeric/"
        },
        "jQuery.isPlainObject()": {
            "title": "jQuery.isPlainObject()",
            "description": "Check to see if an object is a plain object (created using '{}' or 'new Object').",
            "code": "jQuery.isPlainObject({});",
            "url": "http://api.jquery.com/jQuery.isPlainObject/"
        },
        "jQuery.isWindow()": {
            "title": "jQuery.isWindow()",
            "description": "Determine whether the argument is a window. This is used in a number of places in jQuery to determine if we're operating against a browser window (such as the current window or an iframe).",
            "code": "$.isWindow(window);",
            "url": "http://api.jquery.com/jQuery.isWindow/"
        },
        "jQuery.isXMLDoc()": {
            "title": "jQuery.isXMLDoc()",
            "description": "Check to see if a DOM node is within an XML document (or is an XML document).",
            "code": "jQuery.isXMLDoc(document);",
            "url": "http://api.jquery.com/jQuery.isXMLDoc/"
        },
        "jQuery.makeArray()": {
            "title": "jQuery.makeArray()",
            "description": "Convert an array-like object into a true JavaScript array. Many methods, both in jQuery and in JavaScript in general, return objects that are array-like. For example, the jQuery factory function <code>$()</code> returns a jQuery object that has many of the properties of an array (a length, the <code>[]</code> array access operator, etc.), but is not exactly the same as an array and lacks some of an array's built-in methods (such as <code>.pop()</code> and <code>.reverse()</code>).",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.makeArray/"
        },
        "jQuery.map()": {
            "title": "jQuery.map()",
            "description": "Translate all items in an array or object to new array of items.",
            "code": "jQuery.map(array,function(x,y){ ... });",
            "url": "http://api.jquery.com/jQuery.map/"
        },
        "jQuery.merge()": {
            "title": "jQuery.merge()",
            "description": "Merge the contents of two arrays together into the first array. The <code>$.merge()</code> operation forms an array that contains all elements from the two arrays. The orders of items in the arrays are preserved, with items from the second array appended. The <code>$.merge()</code> function is destructive. It alters the first parameter to add the items from the second.",
            "code": "$.merge([0,1,2],[2,3,4]);",
            "url": "http://api.jquery.com/jQuery.merge/"
        },
        "jQuery.noConflict()": {
            "title": "jQuery.noConflict()",
            "description": "Relinquish jQuery's control of the <code>$</code> variable. Many JavaScript libraries use <code>$</code> as a function or variable name, just as jQuery does. In jQuery's case, <code>$</code> is just an alias for <code>jQuery</code>, so all functionality is available without using <code>$</code>. If you need to use another JavaScript library alongside jQuery, return control of <code>$</code> back to the other library with a call to <code>$.noConflict()</code>. Old references of <code>$</code> are saved during jQuery initialization; <code>noConflict()</code> simply restores them.",
            "code": "$.noConflict();",
            "url": "http://api.jquery.com/jQuery.noConflict/"
        },
        "jQuery.noop()": {
            "title": "jQuery.noop()",
            "description": "An empty function. You can use this empty function when you wish to pass around a function that will do nothing.This is useful for plugin authors who offer optional callbacks; in the case that no callback is given, something like <code>jQuery.noop</code> could execute.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.noop/"
        },
        "jQuery.now()": {
            "title": "jQuery.now()",
            "description": "Return a number representing the current time. The <code>$.now()</code> method is a shorthand for the number returned by the expression <code>(new Date).getTime()</code>.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.now/"
        },
        "jQuery.param()": {
            "title": "jQuery.param()",
            "description": "Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. This function is used internally to convert form element values into a serialized string representation.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.param/"
        },
        "jQuery.parseHTML()": {
            "title": "jQuery.parseHTML()",
            "description": "Parses a string into an array of DOM nodes. <code>jQuery.parseHTML</code> uses a native DOM element creation function to convert the string to a set of DOM elements, which can then be inserted into the document.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.parseHTML/"
        },
        "jQuery.parseJSON()": {
            "title": "jQuery.parseJSON()",
            "description": "Takes a well-formed JSON string and returns the resulting JavaScript object. Passing in a malformed JSON string may result in an exception being thrown.",
            "code": "jQuery.parseJSON('{&quot;name&quot;:&quot;John&quot;}');",
            "url": "http://api.jquery.com/jQuery.parseJSON/"
        },
        "jQuery.parseXML()": {
            "title": "jQuery.parseXML()",
            "description": "Parses a string into an XML document. <code>jQuery.parseXML</code> uses the native parsing function of the browser to create a valid XML Document. This document can then be passed to <code>jQuery</code> to create a typical jQuery object that can be traversed and manipulated.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.parseXML/"
        },
        "jQuery.post()": {
            "title": "jQuery.post()",
            "description": "Load data from the server using a HTTP POST request.",
            "code": "$.post('example.php',function(){ ... });",
            "url": "http://api.jquery.com/jQuery.post/"
        },
        "jQuery.proxy()": {
            "title": "jQuery.proxy()",
            "description": "Takes a function and returns a new one that will always have a particular context. This method is most useful for attaching event handlers to an element where the context is pointing back to a different object. Additionally, jQuery makes sure that even if you bind the function returned from <code>jQuery.proxy()</code> it will still unbind the correct function if passed the original.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.proxy/"
        },
        "jQuery.queue()": {
            "title": "jQuery.queue()",
            "description": "Show or manipulate the queue of functions to be executed on the matched element.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.queue/"
        },
        "jQuery.removeData()": {
            "title": "jQuery.removeData()",
            "description": "Remove a previously-stored piece of data. The <code>jQuery.removeData()</code> method allows us to remove values that were previously set using <code>jQuery.data()</code>. When called with the name of a key, <code>jQuery.removeData()</code> deletes that particular value; when called with no arguments, all values are removed.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.removeData/"
        },
        "jQuery.support": {
            "title": "jQuery.support",
            "description": "A collection of properties that represent the presence of different browser features or bugs. Primarily intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.support/"
        },
        "jQuery.trim()": {
            "title": "jQuery.trim()",
            "description": "Remove the whitespace from the beginning and end of a string. The <code>$.trim()</code> function removes all newlines, spaces (including non-breaking spaces), and tabs from the beginning and end of the supplied string. If these whitespace characters occur in the middle of the string, they are preserved.",
            "code": "$.trim(' hello, how are you? ');",
            "url": "http://api.jquery.com/jQuery.trim/"
        },
        "jQuery.type()": {
            "title": "jQuery.type()",
            "description": "Determine the internal JavaScript [[Class]] of an object.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.type/"
        },
        "jQuery.unique()": {
            "title": "jQuery.unique()",
            "description": "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers. The <code>$.unique()</code> function searches through an array of objects, sorting the array, and removing any duplicate nodes. This function only works on plain JavaScript arrays of DOM elements, and is chiefly used internally by jQuery.",
            "code": "jQuery.unique(array);",
            "url": "http://api.jquery.com/jQuery.unique/"
        },
        "jQuery.when()": {
            "title": "jQuery.when()",
            "description": "Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/jQuery.when/"
        },
        ".keydown()": {
            "title": ".keydown()",
            "description": "Bind an event handler to the 'keydown' JavaScript event, or trigger that event on an element. The <code>keydown</code> event is sent to an element when the user first presses a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.",
            "code": "$('#target').keydown(function(){ ... });",
            "url": "http://api.jquery.com/keydown/"
        },
        ".keypress()": {
            "title": ".keypress()",
            "description": "Bind an event handler to the 'keypress' JavaScript event, or trigger that event on an element. The <code>keypress</code> event is sent to an element when the browser registers keyboard input. This is similar to the <code>keydown</code> event, except in the case of key repeats. If the user presses and holds a key, a <code>keydown</code> event is triggered once, but separate <code>keypress</code> events are triggered for each inserted character. In addition, modifier keys (such as Shift) trigger <code>keydown</code> events but not <code>keypress</code> events.",
            "code": "$('#target').keypress(function(){ ... });",
            "url": "http://api.jquery.com/keypress/"
        },
        ".keyup()": {
            "title": ".keyup()",
            "description": "Bind an event handler to the 'keyup' JavaScript event, or trigger that event on an element. The <code>keyup</code> event is sent to an element when the user releases a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.",
            "code": "$('#target').keyup(function(){ ... });",
            "url": "http://api.jquery.com/keyup/"
        },
        ":lang Selector": {
            "title": ":lang Selector",
            "description": "Selects all elements of the specified language. The <code>:lang</code> selector matches elements that have a language value equal to the supplied language code or that start with the supplied language code immediately followed by '-'. For example, the selector <code>$('div:lang(en)')</code> will match <code>&lt;div lang='en'&gt;</code> and <code>&lt;div lang='en-us'&gt;</code> (and any of their descendant <code>&lt;div&gt;</code>s), but not <code>&lt;div lang='fr'&gt;</code>.",
            "code": "$('div:lang(en-us)').addClass('usa');",
            "url": "http://api.jquery.com/lang-selector/"
        },
        ".last()": {
            "title": ".last()",
            "description": "Reduce the set of matched elements to the final one in the set. Given a jQuery object that represents a set of DOM elements, the <code>.last()</code> method constructs a new jQuery object from the last element in that set.",
            "code": "$('li').last().css('color','red');",
            "url": "http://api.jquery.com/last/"
        },
        ":last-child Selector": {
            "title": ":last-child Selector",
            "description": "Selects all elements that are the last child of their parent. While <code>:last</code> matches only a single element, <code>:last-child</code> can match more than one: one for each parent.",
            "code": "$('span:last-child').css('color','red');",
            "url": "http://api.jquery.com/last-child-selector/"
        },
        ":last-of-type Selector": {
            "title": ":last-of-type Selector",
            "description": "Selects all elements that are the last among siblings of the same element name. The <code>:last-of-type</code> selector matches elements that have no other element with the same parent and the same element name coming after it in the document tree.",
            "code": "$('span:last-of-type').css('color','red');",
            "url": "http://api.jquery.com/last-of-type-selector/"
        },
        ":last Selector": {
            "title": ":last Selector",
            "description": "Selects the last matched element. Note that <code>:last</code> selects a single element by filtering the current jQuery collection and matching the last element within it.",
            "code": "$('tr:last').css('color','red');",
            "url": "http://api.jquery.com/last-selector/"
        },
        ".length": {
            "title": ".length",
            "description": "The number of elements in the jQuery object. The <code>.size()</code> method will return the same value.",
            "code": "var length = $('div').length;",
            "url": "http://api.jquery.com/length/"
        },
        ".load() Method": {
            "title": ".load() Method",
            "description": "Load data from the server and place the returned HTML into the matched element.",
            "code": "$('#result').load('ajax/test.html');",
            "url": "http://api.jquery.com/load/"
        },
        ".load() Event": {
            "title": ".load() Event",
            "description": "Bind an event handler to the 'load' JavaScript event. The <code>load</code> event is sent to an element when it and all sub-elements have been completely loaded. This event can be sent to any element associated with a URL: images, scripts, frames, iframes, and the <code>window</code> object.",
            "code": "$('#book').load(function(){ ... });",
            "url": "http://api.jquery.com/load-event/"
        },
        ":lt() Selector": {
            "title": ":lt() Selector",
            "description": "Select all elements at an index less than <code>index</code> within the matched set.",
            "code": "$('td:lt(4)').css('color','red');",
            "url": "http://api.jquery.com/lt-selector/"
        },
        ".map()": {
            "title": ".map()",
            "description": "Pass each element in the current matched set through a function, producing a new jQuery object containing the return values. If you wish to process a plain array or object, use the <code>jQuery.map()</code> instead. The <code>.map()</code> method is particularly useful for getting or setting the value of a collection of elements.",
            "code": "$(':checkbox').map(function(){ ... });",
            "url": "http://api.jquery.com/map/"
        },
        ".mousedown()": {
            "title": ".mousedown()",
            "description": "Bind an event handler to the 'mousedown' JavaScript event, or trigger that event on an element.The <code>mousedown</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed. Any HTML element can receive this event.",
            "code": "$('#target').mousedown(function(){ ... });",
            "url": "http://api.jquery.com/mousedown/"
        },
        ".mouseenter()": {
            "title": ".mouseenter()",
            "description": "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element. The <code>mouseenter</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.",
            "code": "$('#outer').mouseenter(function(){ ... });",
            "url": "http://api.jquery.com/mouseenter/"
        },
        ".mouseleave()": {
            "title": ".mouseleave()",
            "description": "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element. The <code>mouseleave</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.",
            "code": "$('#outer').mouseleave(function(){ ... });",
            "url": "http://api.jquery.com/mouseleave/"
        },
        ".mousemove()": {
            "title": ".mousemove()",
            "description": "Bind an event handler to the 'mousemove' JavaScript event, or trigger that event on an element. The <code>mousemove</code> event is sent to an element when the mouse pointer moves inside the element. Any HTML element can receive this event.",
            "code": "$('#target').mousemove(function(){ ... });",
            "url": "http://api.jquery.com/mousemove/"
        },
        ".mouseout()": {
            "title": ".mouseout()",
            "description": "Bind an event handler to the 'mouseout' JavaScript event, or trigger that event on an element. The <code>mouseout</code> event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.",
            "code": "$('#outer').mouseout(function(){ ... });",
            "url": "http://api.jquery.com/mouseout/"
        },
        ".mouseover()": {
            "title": ".mouseover()",
            "description": "Bind an event handler to the 'mouseover' JavaScript event, or trigger that event on an element. The <code>mouseover</code> event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.",
            "code": "$('#outer').mouseover(function(){ ... });",
            "url": "http://api.jquery.com/mouseover/"
        },
        ".mouseup()": {
            "title": ".mouseup()",
            "description": "Bind an event handler to the 'mouseup' JavaScript event, or trigger that event on an element. The <code>mouseup</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is released. Any HTML element can receive this event.",
            "code": "$('#target').mouseup(function(){ ... });",
            "url": "http://api.jquery.com/mouseup/"
        },
        "Multiple Attribute Selector": {
            "title": "Multiple Attribute Selector",
            "description": "Matches elements that match all of the specified attribute filters.",
            "code": "$('input[id][name$=&quot;man&quot;]').val('only this one');",
            "url": "http://api.jquery.com/multiple-attribute-selector/"
        },
        "Multiple Selector": {
            "title": "Multiple Selector",
            "description": "Selects the combined results of all the specified selectors. You can specify any number of selectors to combine into a single result. This multiple expression combinator is an efficient way to select disparate elements. The order of the DOM elements in the returned jQuery object may not be identical, as they will be in document order. An alternative to this combinator is the <code>.add()</code> method.",
            "code": "$('div,span,p.myClass').css('color','red');",
            "url": "http://api.jquery.com/multiple-selector/"
        },
        ".next()": {
            "title": ".next()",
            "description": "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector. Given a jQuery object that represents a set of DOM elements, the <code>.next()</code> method allows us to search through the immediately following sibling of these elements in the DOM tree and construct a new jQuery object from the matching elements.",
            "code": "$('li.third-item').next().css('color','red');",
            "url": "http://api.jquery.com/next/"
        },
        "Next Adjacent Selector": {
            "title": "Next Adjacent Selector",
            "description": "Selects all next elements matching 'next' that are immediately preceded by a sibling 'prev'. One important point to consider with both the next adjacent sibling selector (<code>prev + next</code>) and the general sibling selector (<code>prev ~ siblings</code>) is that the elements on either side of the combinator must share the same parent.",
            "code": "$('label + input').css('color','blue');",
            "url": "http://api.jquery.com/next-adjacent-Selector/"
        },
        "Next Siblings Selector": {
            "title": "Next Siblings Selector",
            "description": "Selects all sibling elements that follow after the 'prev' element, have the same parent, and match the filtering 'siblings' selector. The notable difference between (<code>prev + next</code>) and (<code>prev ~ siblings</code>) is their respective reach. While the former reaches only to the immediately following sibling element, the latter extends that reach to all following sibling elements.",
            "code": "$('#prev ~ div').css('color','blue');",
            "url": "http://api.jquery.com/next-siblings-selector/"
        },
        ".nextAll()": {
            "title": ".nextAll()",
            "description": "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.nextAll()</code> method allows us to search through the successors of these elements in the DOM tree and construct a new jQuery object from the matching elements.",
            "code": "$('li.third-item').nextAll().css('color','red');",
            "url": "http://api.jquery.com/nextAll/"
        },
        ".nextUntil()": {
            "title": ".nextUntil()",
            "description": "Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed. Given a selector expression that represents a set of DOM elements, the <code>.nextUntil()</code> method searches through the successors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all following siblings up to but not including the one matched by the <code>.nextUntil()</code> argument.",
            "code": "$('#term-2').nextUntil('dt').css('color','red');",
            "url": "http://api.jquery.com/nextUntil/"
        },
        ".not()": {
            "title": ".not()",
            "description": "Remove elements from the set of matched elements. Given a jQuery object that represents a set of DOM elements, the <code>.not()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; the elements that don't match the selector will be included in the result.",
            "code": "$('li').not(':even').css('color','red');",
            "url": "http://api.jquery.com/not/"
        },
        ":not() Selector": {
            "title": ":not() Selector",
            "description": "Selects all elements that do not match the given selector. All selectors are accepted inside <code>:not()</code>, for example: <code>:not(div a)</code> and <code>:not(div,a)</code>.",
            "code": "$('input:not(:checked) + span').css('color','yellow');",
            "url": "http://api.jquery.com/not-selector/"
        },
        ":nth-child() Selector": {
            "title": ":nth-child() Selector",
            "description": "Selects all elements that are the nth-child of their parent.",
            "code": "$('ul li:nth-child(2)').css('color','red');",
            "url": "http://api.jquery.com/nth-child-selector/"
        },
        ":nth-last-child() Selector": {
            "title": ":nth-last-child() Selector",
            "description": "Selects all elements that are the nth-child of their parent, counting from the last element to the first.",
            "code": "$('ul li:nth-last-child(2)').css('color','red');",
            "url": "http://api.jquery.com/nth-last-child-selector/"
        },
        ":nth-last-of-type() Selector": {
            "title": ":nth-last-of-type() Selector",
            "description": "Selects all elements that are the nth-child of their parent, counting from the last element to the first.",
            "code": "$('ul li:nth-last-of-type(2)').css('color','red');",
            "url": "http://api.jquery.com/nth-last-of-type-selector/"
        },
        ":nth-of-type() Selector": {
            "title": ":nth-of-type() Selector",
            "description": "Selects all elements that are the nth child of their parent in relation to siblings with the same element name.",
            "code": "$('span:nth-of-type(2)').css('color','red');",
            "url": "http://api.jquery.com/nth-of-type-selector/"
        },
        ":odd Selector": {
            "title": ":odd Selector",
            "description": "Selects odd elements, zero-indexed. In particular, note that the 0-based indexing means that, counter-intuitively, <code>:odd</code> selects the second element, fourth element, and so on within the matched set.",
            "code": "$('tr:odd').css('color','red');",
            "url": "http://api.jquery.com/odd-selector/"
        },
        ".off()": {
            "title": ".off()",
            "description": "Remove an event handler. The <code>off()</code> method removes event handlers that were attached with <code>.on()</code>.",
            "code": "$('p').off();",
            "url": "http://api.jquery.com/off/"
        },
        ".offset()": {
            "title": ".offset()",
            "description": "Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.",
            "code": "var offset = $('p:last').offset();",
            "url": "http://api.jquery.com/offset/"
        },
        ".offsetParent()": {
            "title": ".offsetParent()",
            "description": "Get the closest ancestor element that is positioned. Given a jQuery object that represents a set of DOM elements, the <code>.offsetParent()</code> method allows us to search through the ancestors of these elements in the DOM tree and construct a new jQuery object wrapped around the closest positioned ancestor. An element is said to be positioned if it has a CSS position attribute of <code>relative</code>, <code>absolute</code>, or <code>fixed</code>. This information is useful for calculating offsets for performing animations and placing objects on the page.",
            "code": "$('li.item-a').offsetParent().css('color','red');",
            "url": "http://api.jquery.com/offsetParent/"
        },
        ".on()": {
            "title": ".on()",
            "description": "Attach an event handler function for one or more events to the selected elements.",
            "code": "$('p').on('click',function(){ ... });",
            "url": "http://api.jquery.com/on/"
        },
        ".one()": {
            "title": ".one()",
            "description": "Attach a handler to an event for the elements. The handler is executed at most once per element.",
            "code": "$('#foo').one('click',function(){ ... });",
            "url": "http://api.jquery.com/one/"
        },
        ":only-child Selector": {
            "title": ":only-child Selector",
            "description": "Selects all elements that are the only child of their parent. If the parent has other child elements, nothing is matched.",
            "code": "$('div button:only-child').css('color','red');",
            "url": "http://api.jquery.com/only-child-selector/"
        },
        ":only-of-type Selector": {
            "title": ":only-of-type Selector",
            "description": "Selects all elements that have no siblings with the same element name. If the parent has other child elements with the same element name, nothing is matched.",
            "code": "$('button:only-of-type').css('color','red');",
            "url": "http://api.jquery.com/only-of-type-selector/"
        },
        ".outerHeight()": {
            "title": ".outerHeight()",
            "description": "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without 'px') representation of the value or null if called on an empty set of elements. The top and bottom padding and border are always included in the <code>.outerHeight()</code> calculation; if the <code>includeMargin</code> argument is set to <code>true</code>, the margin (top and bottom) is also included. This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code>.height()</code> instead.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/outerHeight/"
        },
        ".outerWidth()": {
            "title": ".outerWidth()",
            "description": "Get the current computed width for the first element in the set of matched elements, including padding and border. Returns the width of the element, along with left and right padding, border, and optionally margin, in pixels. This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code>.width()</code> instead.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/outerWidth/"
        },
        ".parent()": {
            "title": ".parent()",
            "description": "Get the parent of each element in the current set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.parent()</code> method allows us to search through the parents of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.parents()</code> and <code>.parent()</code> methods are similar, except that the latter only travels a single level up the DOM tree.",
            "code": "$('li.item-a').parent().css('color','red');",
            "url": "http://api.jquery.com/parent/"
        },
        ":parent Selector": {
            "title": ":parent Selector",
            "description": "Select all elements that that have at least one child node (either an element or text). This is the inverse of <code>:empty</code>.",
            "code": "$('td:parent').fadeTo(1500,0.3);",
            "url": "http://api.jquery.com/parent-selector/"
        },
        ".parents()": {
            "title": ".parents()",
            "description": "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.parents()</code> method allows us to search through the ancestors of these elements in the DOM tree and construct a new jQuery object from the matching elements ordered from immediate parent on up; the elements are returned in order from the closest parent to the outer ones. The <code>.parents()</code> and <code>.parent()</code> methods are similar, except that the latter only travels a single level up the DOM tree.",
            "code": "$('li.item-a').parents().css('color','red');",
            "url": "http://api.jquery.com/parents/"
        },
        ".parentsUntil()": {
            "title": ".parentsUntil()",
            "description": "Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object. Given a selector expression that represents a set of DOM elements, the <code>.parentsUntil()</code> method traverses through the ancestors of these elements until it reaches an element matched by the selector passed in the method's argument. The resulting jQuery object contains all of the ancestors up to but not including the one matched by the <code>.parentsUntil()</code> selector.",
            "code": "$('li.item-a').parentsUntil('.level-1').css('color','red');",
            "url": "http://api.jquery.com/parentsUntil/"
        },
        ":password Selector": {
            "title": ":password Selector",
            "description": "Selects all elements of type password. <code>$(':password')</code> is equivalent to <code>$('[type=password]')</code>. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':password')</code> is equivalent to <code>$('*:password')</code>, so <code>$('input:password')</code> should be used instead.",
            "code": "$('input:password').css('color','red');",
            "url": "http://api.jquery.com/password-selector/"
        },
        ".position()": {
            "title": ".position()",
            "description": "The <code>.position()</code> method allows us to retrieve the current position of an element relative to the offset parent. Contrast this with <code>.offset()</code>, which retrieves the current position relative to the document. When positioning a new element near another one and within the same containing DOM element, <code>.position()</code> is the more useful. It returns an object containing the properties <code>top</code> and <code>left</code>.",
            "code": "$('p:first').position();",
            "url": "http://api.jquery.com/position/"
        },
        ".prepend()": {
            "title": ".prepend()",
            "description": "The <code>.prepend()</code> method inserts the specified content as the first child of each element in the jQuery collection (To insert it as the last child, use <code>.append()</code>). The <code>.prepend()</code> and <code>.prependTo()</code> methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With <code>.prepend()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.prependTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.",
            "code": "$('.inner').prepend('&lt;p&gt;Test&lt;/p&gt;');",
            "url": "http://api.jquery.com/prepend/"
        },
        ".prependTo()": {
            "title": ".prependTo()",
            "description": "Insert every element in the set of matched elements to the beginning of the target. The <code>.prepend()</code> and <code>.prependTo()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .prepend()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.prependTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.",
            "code": "$('&lt;p&gt;Test&lt;/p&gt;').prependTo('.inner');",
            "url": "http://api.jquery.com/prependTo/"
        },
        ".prev()": {
            "title": ".prev()",
            "description": "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.prev()</code> method searches for the predecessor of each of these elements in the DOM tree and constructs a new jQuery object from the matching elements.",
            "code": "$('li.third-item').prev().css('color','red');",
            "url": "http://api.jquery.com/prev/"
        },
        ".prevAll()": {
            "title": ".prevAll()",
            "description": "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.prevAll()</code> method searches through the predecessors of these elements in the DOM tree and construct a new jQuery object from the matching elements; the elements are returned in order beginning with the closest sibling.",
            "code": "$('li.third-item').prevAll().css('color','red');",
            "url": "http://api.jquery.com/prevAll/"
        },
        ".prevUntil()": {
            "title": ".prevUntil()",
            "description": "Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object. Given a selector expression that represents a set of DOM elements, the <code>.prevUntil()</code> method searches through the predecessors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all previous siblings up to but not including the one matched by the <code>.prevUntil()</code> selector; the elements are returned in order from the closest sibling to the farthest. If the selector is not matched or is not supplied, all previous siblings will be selected; in these cases it selects the same elements as the <code>.prevAll()</code> method does when no filter selector is provided.",
            "code": "$('#term-2').prevUntil('dt').css('color','red');",
            "url": "http://api.jquery.com/prevUntil/"
        },
        ".promise()": {
            "title": ".promise()",
            "description": "The <code>.promise()</code> method returns a dynamically generated Promise that is resolved once all actions of a certain type bound to the collection, queued or not, have ended.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/promise/"
        },
        ".prop()": {
            "title": ".prop()",
            "description": "Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.",
            "code": "$('input').prop('checked', true);",
            "url": "http://api.jquery.com/prop/"
        },
        ".pushStack()": {
            "title": ".pushStack()",
            "description": "Add a collection of DOM elements onto the jQuery stack.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/pushStack/"
        },
        ".queue()": {
            "title": ".queue()",
            "description": "Show or manipulate the queue of functions to be executed on the matched elements.",
            "code": "$('#foo').queue(function(){ ... });",
            "url": "http://api.jquery.com/queue/"
        },
        ":radio Selector": {
            "title": ":radio Selector",
            "description": "Selects all elements of type radio. <code>$(':radio')</code> is equivalent to <code>$('[type=radio]')</code>. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':radio')</code> is equivalent to <code>$('*:radio')</code>, so <code>$('input:radio')</code> should be used instead. To select a set of associated radio buttons, you might use <code>$('input[name=gender]:radio')</code>.",
            "code": "$('form input:radio').css({background:'yellow',border:'3px red solid'});",
            "url": "http://api.jquery.com/radio-selector/"
        },
        ".ready()": {
            "title": ".ready()",
            "description": "Specify a function to execute when the DOM is fully loaded. While JavaScript provides the <code>load</code> event for executing code when a page is rendered, this event does not get triggered until all assets such as images have been completely received. In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed. The handler passed to <code>.ready()</code> is guaranteed to be executed after the DOM is ready, so this is usually the best place to attach all other event handlers and run other jQuery code. When using scripts that rely on the value of CSS style properties, it's important to reference external stylesheets or embed style elements before referencing the scripts.",
            "code": "$(document).ready(function(){ ... });",
            "url": "http://api.jquery.com/ready/"
        },
        ".remove()": {
            "title": ".remove()",
            "description": "Remove the set of matched elements from the DOM. Similar to <code>.empty()</code>, the <code>.remove()</code> method takes elements out of the DOM. Use <code>.remove()</code> when you want to remove the element itself, as well as everything inside it. In addition to the elements themselves, all bound events and jQuery data associated with the elements are removed. To remove the elements without removing data and events, use <code>.detach()</code> instead.",
            "code": "$('.hello').remove();",
            "url": "http://api.jquery.com/remove/"
        },
        ".removeAttr()": {
            "title": ".removeAttr()",
            "description": "Remove an attribute from each element in the set of matched elements. The <code>.removeAttr()</code> method uses the JavaScript <code>removeAttribute()</code> function, but it has the advantage of being able to be called directly on a jQuery object and it accounts for different attribute naming across browsers.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/removeAttr/"
        },
        ".removeClass()": {
            "title": ".removeClass()",
            "description": "Remove a single class, multiple classes, or all classes from each element in the set of matched elements. If a class name is included as a parameter, then only that class will be removed from the set of matched elements. If no class names are specified in the parameter, all classes will be removed. More than one class may be removed at a time, separated by a space, from the set of matched elements.",
            "code": "$('p').removeClass('myClass yourClass');",
            "url": "http://api.jquery.com/removeClass/"
        },
        ".removeData()": {
            "title": ".removeData()",
            "description": "Remove a previously-stored piece of data. The <code>.removeData()</code> method allows us to remove values that were previously set using <code>.data()</code>. When called with the name of a key, <code>.removeData()</code> deletes that particular value; when called with no arguments, all values are removed. Removing data from jQuery's internal <code>.data()</code> cache does not effect any HTML5 <code>data-</code> attributes in a document; use <code>.removeAttr()</code> to remove those.",
            "code": "$('div').removeData('test1');",
            "url": "http://api.jquery.com/removeData/"
        },
        ".removeProp()": {
            "title": ".removeProp()",
            "description": "The <code>.removeProp()</code> method removes properties set by the <code>.prop()</code> method.",
            "code": "$('p').removeProp('luggageCode');",
            "url": "http://api.jquery.com/removeProp/"
        },
        ".replaceAll()": {
            "title": ".replaceAll()",
            "description": "Replace each target element with the set of matched elements. The <code>.replaceAll()</code> method is corollary to <code>.replaceWith()</code>, but with the source and target reversed.",
            "code": "$('.first').replaceAll('.third');",
            "url": "http://api.jquery.com/replaceAll/"
        },
        ".replaceWith()": {
            "title": ".replaceWith()",
            "description": "Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed. The <code>.replaceWith()</code> method removes content from the DOM and inserts new content in its place with a single call.",
            "code": "$('div.third').replaceWith($('.first'));",
            "url": "http://api.jquery.com/replaceWith/"
        },
        ":reset Selector": {
            "title": ":reset Selector",
            "description": "Selects all elements of type reset. <code>:reset</code> is equivalent to <code>[type='reset']</cod",
            "code": "$('input:reset').css({background:'yellow',border:'3px red solid'});",
            "url": "http://api.jquery.com/reset-selector/"
        },
        ".resize()": {
            "title": ".resize()",
            "description": "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element. This method is a shortcut for <code>.on('resize', handler)</code> and <code>.trigger('resize')</code>. The <code>resize</code> event is sent to the <code>window</code> element when the size of the browser window changes.",
            "code": "$(window).resize(function(){ ... });",
            "url": "http://api.jquery.com/resize/"
        },
        ":root Selector": {
            "title": ":root Selector",
            "description": "Selects the element that is the root of the document. In HTML, the root of the document, and thus the element that <code>$(':root')</code> selects, is always the <code>&lt;html&gt;</code> element.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/root-selector/"
        },
        ".scroll()": {
            "title": ".scroll()",
            "description": "Bind an event handler to the 'scroll' JavaScript event, or trigger that event on an element. The <code>scroll</code> event is sent to an element when the user scrolls to a different place in the element. It applies to <code>window</code> objects, but also to scrollable frames and elements with the <code>overflow</code> CSS property set to <code>scroll</code> (or <code>auto</code> when the element's explicit height or width is less than the height or width of its contents).",
            "code": "$('#target').scroll(function(){ ... });",
            "url": "http://api.jquery.com/scroll/"
        },
        ".scrollLeft()": {
            "title": ".scrollLeft()",
            "description": "Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.",
            "code": "$('div.demo').scrollLeft(300);",
            "url": "http://api.jquery.com/scrollLeft/"
        },
        ".scrollTop()": {
            "title": ".scrollTop()",
            "description": "Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element. The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area. If the scroll bar is at the very top, or if the element is not scrollable, this number will be <code>0</code>.",
            "code": "$('div.demo').scrollTop(300);",
            "url": "http://api.jquery.com/scrollTop/"
        },
        ".select()": {
            "title": ".select()",
            "description": "Bind an event handler to the 'select' JavaScript event, or trigger that event on an element. The <code>select</code> event is sent to an element when the user makes a text selection inside it. This event is limited to <code>&lt;input type='text'&gt;</code> fields and <code>&lt;textarea&gt;</code> boxes.",
            "code": "$('#target').select(function(){ ... });",
            "url": "http://api.jquery.com/select/"
        },
        ":selected Selector": {
            "title": ":selected Selector",
            "description": "Selects all elements that are selected. The <code>:selected</code> selector works for <code>&lt;option&gt;</code> elements. It does not work for checkboxes or radio inputs; use <code>:checked</code> for them.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/selected-selector/"
        },
        ".serialize()": {
            "title": ".serialize()",
            "description": "Encode a set of form elements as a string for submission. The <code>.serialize()</code> method creates a text string in standard URL-encoded notation. It operates on a jQuery object representing a set of form elements.",
            "code": "$('form').serialize();",
            "url": "http://api.jquery.com/serialize/"
        },
        ".serializeArray()": {
            "title": ".serializeArray()",
            "description": "Encode a set of form elements as an array of names and values. The <code>.serializeArray()</code> method creates a JavaScript array of objects, ready to be encoded as a JSON string. It operates on a jQuery object representing a set of form elements.",
            "code": "$(':input').serializeArray();",
            "url": "http://api.jquery.com/serializeArray/"
        },
        ".show()": {
            "title": ".show()",
            "description": "Display the matched elements. With no parameters, the <code>.show()</code> method is the simplest way to display an element.",
            "code": "$('.target').show();",
            "url": "http://api.jquery.com/show/"
        },
        ".siblings()": {
            "title": ".siblings()",
            "description": "Get the siblings of each element in the set of matched elements, optionally filtered by a selector. Given a jQuery object that represents a set of DOM elements, the <code>.siblings()</code> method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.",
            "code": "$('li.third-item').siblings().css('color','red');",
            "url": "http://api.jquery.com/siblings/"
        },
        ".slice()": {
            "title": ".slice()",
            "description": "Reduce the set of matched elements to a subset specified by a range of indices. Given a jQuery object that represents a set of DOM elements, the <code>.slice()</code> method constructs a new jQuery object containing a subset of the elements specified by the <code>start</code> and, optionally, <code>end</code> argument. The supplied <code>start</code> index identifies the position of one of the elements in the set; if <code>end</code> is omitted, all elements after this one will be included in the result.",
            "code": "$('li').slice(2,4).css('color','red');",
            "url": "http://api.jquery.com/slice/"
        },
        ".slideDown()": {
            "title": ".slideDown()",
            "description": "Display the matched elements with a sliding motion. The <code>.slideDown()</code> method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.",
            "code": "$('div').slideDown('slow');",
            "url": "http://api.jquery.com/slideDown/"
        },
        ".slideToggle()": {
            "title": ".slideToggle()",
            "description": "Display or hide the matched elements with a sliding motion. The <code>.slideToggle()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up or down, appearing to reveal or conceal the items. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The <code>display</code> property is saved and restored as needed. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>. When the height reaches 0 after a hiding animation, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.",
            "code": "$('p').slideToggle('slow');",
            "url": "http://api.jquery.com/slideToggle/"
        },
        ".slideUp()": {
            "title": ".slideUp()",
            "description": "Hide the matched elements with a sliding motion. The <code>.slideUp()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up, appearing to conceal the items. Once the height reaches 0 (or, if set, to whatever the CSS min-height property is), the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page. Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.",
            "code": "$('div').slideUp();",
            "url": "http://api.jquery.com/slideUp/"
        },
        ".stop()": {
            "title": ".stop()",
            "description": "Stop the currently-running animation on the matched elements. When <code>.stop()</code> is called on an element, the currently-running animation (if any) is immediately stopped. If, for instance, an element is being hidden with <code>.slideUp()</code> when <code>.stop()</code> is called, the element will now still be displayed, but will be a fraction of its previous height. Callback functions are not called.",
            "code": "$('.block').stop();",
            "url": "http://api.jquery.com/stop/"
        },
        ".submit()": {
            "title": ".submit()",
            "description": "Bind an event handler to the 'submit' JavaScript event, or trigger that event on an element. The <code>submit</code> event is sent to an element when the user is attempting to submit a form. It can only be attached to <code>&lt;form&gt;</code> elements. Forms can be submitted either by clicking an explicit <code>&lt;input type='submit'&gt;</code>, <code>&lt;input type='image'&gt;</code>, or <code>&lt;button type='submit'&gt;</code>, or by pressing Enter when certain form elements have focus.",
            "code": "$('#target').submit(function(){ ... });",
            "url": "http://api.jquery.com/submit/"
        },
        ":submit Selector": {
            "title": ":submit Selector",
            "description": "Selects all elements of type submit. The <code>:submit</code> selector typically applies to button or input elements. Note that some browsers treat <code>&lt;button&gt;</code> element as <code>type='default'</code> implicitly while others (such as Internet Explorer) do not.",
            "code": "$('td:submit').css({background:'yellow',border:'3px red solid'});",
            "url": "http://api.jquery.com/submit-selector/"
        },
        ":target Selector": {
            "title": ":target Selector",
            "description": "Selects the target element indicated by the fragment identifier of the document's URI. If the document's URI contains a fragment identifier, or hash, then the <code>:target</code> selector will match the element with an ID that matches the identifier. For example, given a document with a URI of http://example.com/#foo, <code>$('p:target')</code> will select the <code>&lt;p id='foo'&gt;</code> element.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/target-selector/"
        },
        ".text()": {
            "title": ".text()",
            "description": "Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.",
            "code": "$('p').text('&lt;b&gt;Some&lt;/b&gt; new text.');",
            "url": "http://api.jquery.com/text/"
        },
        ":text Selector": {
            "title": ":text Selector",
            "description": "<code>$(':text')</code> allows us to select all <code>&lt;input type='text'&gt;</code> elements. As with other pseudo-class selectors (those that begin with a ':') it is recommended to precede it with a tag name or some other selector; otherwise, the universal selector ('*') is implied. In other words, the bare <code>$(':text')</code> is equivalent to <code>$('*:text')</code>, so <code>$('input:text')</code> should be used instead.",
            "code": "$('form input:text').css({background:'yellow',border:'3px red solid'});",
            "url": "http://api.jquery.com/text-selector/"
        },
        ".toArray()": {
            "title": ".toArray()",
            "description": "Retrieve all the DOM elements contained in the jQuery set, as an array.",
            "code": "$('li').toArray();",
            "url": "http://api.jquery.com/toArray/"
        },
        ".toggle()": {
            "title": ".toggle()",
            "description": "Display or hide the matched elements. With no parameters, the <code>.toggle()</code> method simply toggles the visibility of elements.",
            "code": "$('.target').toggle();",
            "url": "http://api.jquery.com/toggle/"
        },
        ".toggleClass()": {
            "title": ".toggleClass()",
            "description": "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument. This method takes one or more class names as its parameter.",
            "code": "$('#foo').toggleClass(className, addOrRemove);",
            "url": "http://api.jquery.com/toggleClass/"
        },
        ".trigger()": {
            "title": ".trigger()",
            "description": "Execute all handlers and behaviors attached to the matched elements for the given event type. Any event handlers attached with <code>.on()</code> or one of its shortcut methods are triggered when the corresponding event occurs. They can be fired manually, however, with the <code>.trigger()</code> method. A call to <code>.trigger()</code> executes the handlers in the same order they would be if the event were triggered naturally by the user.",
            "code": "$('#foo').trigger('click');",
            "url": "http://api.jquery.com/trigger/"
        },
        ".triggerHandler()": {
            "title": ".triggerHandler()",
            "description": "Execute all handlers attached to an element for an event. The <code>.triggerHandler()</code> method behaves similarly to <code>.trigger()</code>.",
            "code": "$('input').triggerHandler('focus');",
            "url": "http://api.jquery.com/triggerHandler/"
        },
        ".unbind()": {
            "title": ".unbind()",
            "description": "Remove a previously-attached event handler from the elements. Event handlers attached with <code>.bind()</code> can be removed with <code>.unbind()</code>. (As of jQuery 1.7, the <code>.on()</code> and <code>.off()</code> methods are preferred to attach and remove event handlers on elements.) In the simplest case, with no arguments, <code>.unbind()</code> removes all handlers attached to the elements.",
            "code": "$('#foo').unbind();",
            "url": "http://api.jquery.com/unbind/"
        },
        ".undelegate()": {
            "title": ".undelegate()",
            "description": "Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements. The <code>.undelegate()</code> method is a way of removing event handlers that have been bound using <code>.delegate()</code>. As of jQuery 1.7, the <code>.on()</code> and <code>.off()</code> methods are preferred for attaching and removing event handlers.",
            "code": "$('p').undelegate();",
            "url": "http://api.jquery.com/undelegate/"
        },
        ".unload()": {
            "title": ".unload()",
            "description": "Bind an event handler to the 'unload' JavaScript event. The <code>unload</code> event is sent to the <code>window</code> element when the user navigates away from the page. This could mean one of many things. The user could have clicked on a link to leave the page, or typed in a new URL in the address bar. The forward and back buttons will trigger the event. Closing the browser window will cause the event to be triggered. Even a page reload will first create an <code>unload</code> event.",
            "code": "$(window).unload(function(){ ... });",
            "url": "http://api.jquery.com/unload/"
        },
        ".unwrap()": {
            "title": ".unwrap()",
            "description": "The <code>.unwrap()</code> method removes the element's parent. This is effectively the inverse of the <code>.wrap()</code> method. The matched elements (and their siblings, if any) replace their parents within the DOM structure.",
            "code": "$('p').unwrap();",
            "url": "http://api.jquery.com/unwrap/"
        },
        ".val()": {
            "title": ".val()",
            "description": "Get the current value of the first element in the set of matched elements or set the value of every matched element. The <code>.val()</code> method is primarily used to get the values of form elements such as <code>input</code>, <code>select</code> and <code>textarea</code> or to set the values of form fields.",
            "code": "$('input').val();",
            "url": "http://api.jquery.com/val/"
        },
        ":visible Selector": {
            "title": ":visible Selector",
            "description": "Selects all elements that are visible. Elements are considered visible if they consume space in the document. Visible elements have a width or height that is greater than zero.",
            "code": "NO_CODE",
            "url": "http://api.jquery.com/visible-selector/"
        },
        ".width()": {
            "title": ".width()",
            "description": "Get the current computed width for the first element in the set of matched elements or set the width of every matched element.",
            "code": "$(document).width();",
            "url": "http://api.jquery.com/width/"
        },
        ".wrap()": {
            "title": ".wrap()",
            "description": "Wrap an HTML structure around each element in the set of matched elements. The <code>.wrap()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. A copy of this structure will be wrapped around each of the elements in the set of matched elements. This method returns the original set of elements for chaining purposes.",
            "code": "$('.inner').wrap('&lt;div class=&quot;new&quot; /&gt;');",
            "url": "http://api.jquery.com/wrap/"
        },
        ".wrapAll()": {
            "title": ".wrapAll()",
            "description": "Wrap an HTML structure around all elements in the set of matched elements. The <code>.wrapAll()</code> function can take any string or object that could be passed to the <code>$()</code> function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around all of the elements in the set of matched elements, as a single group.",
            "code": "$('.inner').wrapAll('&lt;div class=&quot;new&quot; /&gt;');",
            "url": "http://api.jquery.com/wrapAll/"
        },
        ".wrapInner()": {
            "title": ".wrapInner()",
            "description": "Wrap an HTML structure around the content of each element in the set of matched elements. The <code>.wrapInner()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around the content of each of the elements in the set of matched elements.",
            "code": "$('.inner').wrapInner('&lt;div class=&quot;new&quot; /&gt;');",
            "url": "http://api.jquery.com/wrapInner/"
        }
    }
}
