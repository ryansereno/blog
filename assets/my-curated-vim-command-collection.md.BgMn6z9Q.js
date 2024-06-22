import{_ as e,c as o,o as n,M as r}from"./chunks/framework.Dt16nE2a.js";const t="/assets/vim-logo.Dcyrx6Xv.png",w=JSON.parse('{"title":"My Curated 𝑽im Command Collection","description":"","frontmatter":{"aside":true},"headers":[],"relativePath":"my-curated-vim-command-collection.md","filePath":"my-curated-vim-command-collection.md"}'),i={name:"my-curated-vim-command-collection.md"},a=r('<h1 id="my-curated-vim-command-collection" tabindex="-1">My Curated 𝑽im Command Collection <a class="header-anchor" href="#my-curated-vim-command-collection" aria-label="Permalink to &quot;My Curated 𝑽im Command Collection&quot;">​</a></h1><p>Date: August 30, 2022</p><p align="center"><img src="'+t+'" alt="vim-logo-png-transparent.png" width="100px"></p><h2 id="recording-and-repeating-commands" tabindex="-1"><strong>Recording and Repeating Commands</strong> <a class="header-anchor" href="#recording-and-repeating-commands" aria-label="Permalink to &quot;**Recording and Repeating Commands**&quot;">​</a></h2><ul><li><strong>Record a sequence</strong>: <code>q n {command sequence} q</code></li><li><strong>Repeat a sequence</strong>: <code>@ n</code></li></ul><h2 id="basic-text-modification" tabindex="-1"><strong>Basic Text Modification</strong> <a class="header-anchor" href="#basic-text-modification" aria-label="Permalink to &quot;**Basic Text Modification**&quot;">​</a></h2><ul><li><strong>Repeat last change</strong>: <code>.</code></li><li><strong>Change inner word</strong>: <code>ciw</code> <em>(then type new word)</em></li><li><strong>Increment number</strong>: <code>Ctrl a</code></li><li><strong>Decrement number</strong>: <code>Ctrl x</code></li><li><strong>Change case of character under cursor</strong>: <code>~</code></li></ul><h2 id="navigation-and-files" tabindex="-1"><strong>Navigation and Files</strong> <a class="header-anchor" href="#navigation-and-files" aria-label="Permalink to &quot;**Navigation and Files**&quot;">​</a></h2><ul><li><strong>Open file from a path name</strong>: <code>gf</code></li><li><strong>Move to a character</strong>: <code>f {character}</code></li><li><strong>Jump between matching HTML tags</strong>: <code>%</code></li></ul><h2 id="windows-and-splits" tabindex="-1"><strong>Windows and Splits</strong> <a class="header-anchor" href="#windows-and-splits" aria-label="Permalink to &quot;**Windows and Splits**&quot;">​</a></h2><ul><li><strong>Split window horizontally</strong>: <code>:vs</code> or <code>:vsp {filename}</code></li><li><strong>Split window vertically</strong>: <code>Ctrl w v</code> or <code>:vs {filename}</code></li><li><strong>Resize windows to be equal</strong>: <code>Ctrl w =</code></li><li><strong>Move right between panes</strong>: <code>Ctrl w l</code></li><li><strong>Move left between panes</strong>: <code>Ctrl w h</code></li><li><strong>Toggle between panes</strong>: <code>Ctrl w w</code></li><li><strong>Resize horizontally</strong>: <code>:res {number}</code></li><li><strong>Resize vertically</strong>: <code>:vertical resize {number}</code></li></ul><h2 id="editing-and-surrounding-text" tabindex="-1"><strong>Editing and Surrounding Text</strong> <a class="header-anchor" href="#editing-and-surrounding-text" aria-label="Permalink to &quot;**Editing and Surrounding Text**&quot;">​</a></h2><ul><li><strong>Surround word with quotes or tags</strong>: <code>c i w &quot;&quot; Esc p</code></li><li><strong>Delete surrounding single quotes (w/ vim-surround plugin)</strong>: <code>d s &#39;</code></li><li><strong>Change surrounding character (w/ vim-surround plugin)</strong>: <code>c s {current} {new}</code></li></ul><h2 id="clipboard-operations" tabindex="-1"><strong>Clipboard Operations</strong> <a class="header-anchor" href="#clipboard-operations" aria-label="Permalink to &quot;**Clipboard Operations**&quot;">​</a></h2><ul><li><strong>Copy to system clipboard</strong>: <code>&quot;*y</code></li><li><strong>Paste from system clipboard</strong>: <code>&quot;*p</code></li></ul><h2 id="search-and-replace" tabindex="-1"><strong>Search and Replace</strong> <a class="header-anchor" href="#search-and-replace" aria-label="Permalink to &quot;**Search and Replace**&quot;">​</a></h2><ul><li><strong>Replace in current line</strong>: <code>:s/{searchTerm}/{replacement}/g</code></li><li><strong>Replace in entire document</strong>: <code>:%s/{searchTerm}/{replacement}/g</code></li><li><strong>Replace within a visually selected block</strong>: <code>:s/{currentWord}/{newWord}/g</code></li></ul><h2 id="file-browsing-with-netrw" tabindex="-1"><strong>File Browsing with Netrw</strong> <a class="header-anchor" href="#file-browsing-with-netrw" aria-label="Permalink to &quot;**File Browsing with Netrw**&quot;">​</a></h2><ul><li><strong>Open netrw window</strong>: <code>:Ex</code></li><li><strong>Horizontal split netrw</strong>: <code>:Sex</code></li><li><strong>Vertical split netrw</strong>: <code>:Vex</code></li><li><strong>Create a new directory in netrw</strong>: <code>d</code></li><li><strong>Create a new file in netrw directory</strong>: <code>%</code></li><li><strong>Open vertical split file preview</strong>: <code>p (when file is highlighted)</code></li></ul><h2 id="folding-collapsing-code" tabindex="-1"><strong>Folding (Collapsing) Code</strong> <a class="header-anchor" href="#folding-collapsing-code" aria-label="Permalink to &quot;**Folding (Collapsing) Code**&quot;">​</a></h2><ul><li><strong>New fold</strong>: <code>zfat</code></li><li><strong>Toggle an existing fold</strong>: <code>za</code></li><li><strong>Open all folds in document</strong>: <code>zR</code></li><li><strong>Close all folds in document</strong>: <code>zM</code></li></ul><h2 id="marks-and-jumps" tabindex="-1"><strong>Marks and Jumps</strong> <a class="header-anchor" href="#marks-and-jumps" aria-label="Permalink to &quot;**Marks and Jumps**&quot;">​</a></h2><ul><li><strong>Set a mark</strong>: <code>m {a-z}</code></li><li><strong>Jump to a mark</strong>: <code>&#39; {a-z}</code> or `` {a-z}`</li><li><strong>Jump to the previous location</strong>: <code>&#39;&#39;</code></li></ul><h2 id="running-commands-and-scripts" tabindex="-1"><strong>Running Commands and Scripts</strong> <a class="header-anchor" href="#running-commands-and-scripts" aria-label="Permalink to &quot;**Running Commands and Scripts**&quot;">​</a></h2><ul><li><strong>Run current JS script in Node</strong>: <code>:w !node %</code></li><li><strong>Search within files with <code>grep</code>like command</strong>: <code>:Rg {searchTerm}</code></li></ul><h2 id="colorschemes" tabindex="-1"><strong>Colorschemes</strong> <a class="header-anchor" href="#colorschemes" aria-label="Permalink to &quot;**Colorschemes**&quot;">​</a></h2><ul><li><strong>Change colorscheme</strong>: <code>:colo {colorscheme}</code></li><li><strong>Install a colorscheme</strong>: <em>(copy colorscheme vim file into <code>~/.vim/colors</code>)</em></li><li><strong>Enable true colors in terminal</strong>: <code>set termguicolors</code> <em>(in <code>.vimrc</code>)</em></li></ul><h2 id="emmet-commands" tabindex="-1"><strong>Emmet Commands</strong> <a class="header-anchor" href="#emmet-commands" aria-label="Permalink to &quot;**Emmet Commands**&quot;">​</a></h2><ul><li><strong>Self-closing tags for React</strong>: <code>customtag/</code> <em>(converts to <code>&lt;customtag /&gt;</code>)</em></li></ul><h2 id="macros" tabindex="-1"><strong>Macros</strong> <a class="header-anchor" href="#macros" aria-label="Permalink to &quot;**Macros**&quot;">​</a></h2><ul><li><strong>Record a macro</strong>: <code>q {register} {commands} q</code></li><li><strong>Playback a macro</strong>: <code>@ {register}</code></li></ul><h2 id="miscellaneous" tabindex="-1"><strong>Miscellaneous</strong> <a class="header-anchor" href="#miscellaneous" aria-label="Permalink to &quot;**Miscellaneous**&quot;">​</a></h2><ul><li><strong>Check spelling</strong>: <code>z=</code></li><li><strong>Select text inside surrounding character</strong>: <code>v i {character}</code></li><li><strong>Yank (copy) text inside surrounding character</strong>: <code>y i {character}</code></li><li><strong>Select a whole word</strong>: <code>v i w</code></li><li><strong>Add line above current</strong>: <code>O</code></li><li><strong>Add line below current</strong>: <code>o</code></li><li><strong>Join line below with current line</strong>: <code>J</code></li><li><strong>Set netrw to directory below cursor</strong>: <code>gn</code></li><li><strong>Move cursor vertically by half window height</strong>: <code>Ctrl + u</code> / <code>Ctrl + d</code></li></ul>',33),l=[a];function s(c,d,g,m,u,h){return n(),o("div",null,l)}const b=e(i,[["render",s]]);export{w as __pageData,b as default};
