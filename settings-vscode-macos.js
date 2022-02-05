{
    // Fonts
    "editor.fontFamily": "FiraCode-Retina",
    "editor.fontLigatures": true,
    "editor.fontSize": 14,
    "[Log]": {
        "editor.fontSize": 12
    },
    "terminal.integrated.fontSize": 13,
    // Vim
    // gcc to comment
    // gd jump to definition
    // gq on visual selection, reformat
    // gh show tooltip
    "vim.handleKeys": {
        "<C-d>": true,
        "<C-u>": true,
    },
    // https://github.com/VSCodeVim/Vim/#vim-easymotion
    // ,,w / ,,b
    "vim.easymotion": true,
    "vim.surround": true,
    "vim.ignorecase": true,
    "vim.smartcase": true,
    // s[char][char] / S[char][char]
    "vim.sneak": true,
    "vim.hlsearch": false,
    "vim.leader": ",",
    "vim.useSystemClipboard": true,
    "vim.enableNeovim": true,
    "vim.commandLineModeKeyBindings": [
        {
            "before": ["W", "<CR>"],
            "after": ["w", "<CR>"]
        },
    ],
    // CPP
    "C_Cpp.default.cppStandard": "c++17",
    "C_Cpp.default.cStandard": "c11",
    "C_Cpp.experimentalFeatures": "Enabled",
    "C_Cpp.default.compilerArgs": [
        "-I`python-config --headers`"
    ],
    "files.autoSave": "afterDelay",
    "cmake.configureOnOpen": true,
    "gitlens.showWelcomeOnInstall": false,
    "gitlens.showWhatsNewAfterUpgrades": false,
    // CMake
    "cmake.buildArgs": [
        "DPYBIND11_PYTHON_VERSION=3.9"
    ],
    "cmake.configureSettings": {
        "CMAKE_PREFIX_PATH": "/Users/juanjux/.pyenv/versions/3.9.0/lib/python3.9/site-packages"
    },
    "cmake.buildDirectory": "${workspaceFolder}",
    "cmake.buildEnvironment": {
        "CMAKE_PREFIX_PATH": "/Users/juanjux/.pyenv/versions/3.9.0/lib/python3.9/site-packages"
    },
    "cmake.environment": {
        "CMAKE_PREFIX_PATH": "/Users/juanjux/.pyenv/versions/3.9.0/lib/python3.9/site-packages"
    },
    "cmake.configureEnvironment": {
        "CMAKE_PREFIX_PATH": " /Users/juanjux/.pyenv/versions/3.9.0/lib/python3.9/site-packages"
    },
    "cmake.testEnvironment": {
        "CMAKE_PREFIX_PATH": "/Users/juanjux/.pyenv/versions/3.9.0/lib/python3.9/site-packages"
    },
    "cmake.generator": "Unix Makefiles",

    // GUI and editor
    "editor.minimap.enabled": false,
    "breadcrumbs.enabled": false,
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "terminal.integrated.defaultProfile.osx": "fish",
    "workbench.colorTheme": "Visual Studio Dark",
}