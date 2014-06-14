" local syntax file - set colors on a per-machine basis:
" vim: tw=0 ts=4 sw=4
" Vim color file
" Title: Manxome Color Scheme
" Maintainer:	Ricardo SIGNES <samael-vim@lists.manxome.org>
" This Version:	R1 [2002-03-30]

hi clear
set background=dark
if exists("syntax_on")
  syntax reset
endif
let g:colors_name = "manxome"

highlight Title			ctermfg=3				cterm=bold	guifg=#ffff00
highlight Directory  	ctermfg=4				cterm=bold	guifg=#0000ff
highlight StatusLine 	ctermfg=7	ctermbg=4	cterm=bold	guifg=#ffffff	guibg=#0000ff	gui=none
highlight StatusLineNC 	ctermfg=0	ctermbg=4	cterm=bold	guifg=#000000	guibg=#0000ff	gui=none
highlight Normal		ctermfg=7							guifg=#eeeeee	guibg=#000000
highlight Search		ctermfg=7	ctermbg=4	cterm=bold	guifg=#ffffff	guibg=#0000ff

highlight Comment		ctermfg=2				cterm=bold	guifg=#00ff00
highlight Constant		ctermfg=6				cterm=bold	guifg=#00ffff					gui=none
highlight Special		ctermfg=7				cterm=bold	guifg=#ffffff
highlight Identifier	ctermfg=4				cterm=bold	guifg=#66aadd
highlight Statement 	ctermfg=6				cterm=none	guifg=#00aaaa					gui=none
highlight PreProc		ctermfg=7				cterm=bold	guifg=#ffffff
highlight Type			ctermfg=6							guifg=#00aaaa					gui=none
highlight Underlined	ctermfg=2				cterm=none	
highlight Ignore		ctermfg=0				cterm=bold  guifg=#aaaaaa
highlight Error			ctermfg=1	ctermbg=0	cterm=bold	guibg=#ff0000	guibg=#000000
highlight Todo		 	ctermfg=3	ctermbg=0				guifg=#aaaa00	guibg=#000000

highlight htmlBold		ctermfg=7	ctermbg=0	cterm=bold	guifg=#ffffff	guibg=#000000
highlight htmlItalic	ctermfg=5	ctermbg=0	cterm=bold	guifg=#ff00ff	guibg=#000000
