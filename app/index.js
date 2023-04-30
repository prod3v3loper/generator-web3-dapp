// DEFAULTS
const createGLOBALSjson = require("./settings/defaults/global");
const createPackageJson = require("./settings/defaults/package-json");
const createTsconfig = require("./settings/defaults/tsconfig-json");
const createPackageWeb3Json = require("./settings/web3/package-json");
// Yeoman
const Generator = require("yeoman-generator");
// Helper for create empty folders
// const mkdirp = require( 'mkdirp' );
// Scaffold
// const List = require("@webpack-cli/webpack-scaffold").List;
// const Input = require( '@webpack-cli/webpack-scaffold' ).Input;
// Default abstracted configs
const createCommonConfig = require("./settings/configs/common");
const createProConfig = require("./settings/configs/prod");
const createDevConfig = require("./settings/configs/dev");

/**
 * Yeoman Webpack Scaffolding by prod3v3loper
 *
 * @author      Samet Tarim aka prod3v3loper
 * @copyright   Copyright (C) 2023 Samet Tarim - All rights reserved
 * @license     MIT
 * @version     1.0.0
 * @since       1.0
 * @package     MELABUAI
 * @subpackage  generator-web3-dapp
 *
 * @see         https://yeoman.io/authoring/index.html
 * @see         https://github.com/evenstensberg/webpack-scaffold-demo
 * @see         https://yeoman.io/authoring/dependencies.html
 */
module.exports = class WebpackGenerator extends Generator {
  /**
   * Constructor
   *
   * @param {*} args
   * @param {*} opts
   */
  constructor(args, opts) {

    super(args, opts);

    this.answers = {};
    this.comps = "";
    this.settings = {
      install: false,
      root: "",
    };

    // This method adds support for a `--coffee` flag
    // this.option("coffee");

    // This makes `name` a required argument.
    // this.argument("name", { type: String, required: true });
    // this.argument("year", { type: String, required: true });
    // this.argument("project", { type: String, required: true });

    // And you can then access it later; e.g.
    // this.log(this.options.name);

    opts.env.configuration = {
      // This create the webpack.config.js
      // This property says set name webpack."config".js
      // We create 3 config files webpack.config.js, webpack.dev.js and webpack.pro.js
      config: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
      dev: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
      prod: {
        topScope: [],
        webpackOptions: {},
        configName: "",
      },
    };
  }

  /**
   * Prompting
   *
   * @see https://yeoman.io/authoring/user-interactions.html
   */
  async prompting() {
    // log so
    // this.log( this );

    // Chain the questions
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Customer name?",
        default: this.appname.replace(/\s/g, "-").toLocaleLowerCase(), // Default to current folder name
      },
      {
        type: "input",
        name: "year",
        message: "Project year?",
        default: new Date().getFullYear(),
      },
      {
        type: "input",
        name: "project",
        message: "Project name?",
        default: "newsletter",
      },
      {
        type: "input",
        name: "components",
        message: "Components you want to import? (counter, todolist, clock)",
        default: ["clock"],
      },
      {
        type: "confirm",
        name: "npminstall",
        message: "Want you install all dependencies?",
        default: "Y/n",
      },
    ]);

    // List("input", "For Device? (use arrow keys)", [
    //   "counter",
    //   "todolist",
    //   "clock",
    // ]);

    this.settings.install = this.answers.npminstall;
    this.comps = this.answers.components;

    // COMMON
    this.options.env.configuration.config.topScope = [
      'const path = require("path")',
      'const CleanWebpackPlugin = require("clean-webpack-plugin")',
      'const HtmlWebpackPlugin = require("html-webpack-plugin")',
    ];
    this.options.env.configuration.config.webpackOptions = createCommonConfig(
      this.answers
    );
    this.options.env.configuration.config.configName = "config";

    // DEV
    this.options.env.configuration.dev.topScope = [
      'const path = require("path")',
      'const webpack = require("webpack")',
      'const merge = require("webpack-merge")',
      'const common = require("./webpack.config.js")',
    ];
    this.options.env.configuration.dev.webpackOptions = createDevConfig(
      this.answers
    );
    this.options.env.configuration.dev.merge = "common";
    this.options.env.configuration.dev.configName = "dev";

    // PRO
    this.options.env.configuration.prod.topScope = [
      'const path = require("path")',
      'const merge = require("webpack-merge")',
      'const common = require("./webpack.config.js")',
    ];
    this.options.env.configuration.prod.webpackOptions = createProConfig(
      this.answers
    );
    this.options.env.configuration.prod.merge = "common";
    this.options.env.configuration.prod.configName = "prod";

    // Define root folder
    this.settings.root = this.answers.name + "/" + this.answers.year + "/" + this.answers.project;
  }

  /**
   * Set destination path
   */
  paths() {
    // Set root folder to destination
    this.destinationRoot(this.settings.root);
  }

  /**
   * Writing write the package.json and config files
   *
   * @see https://yeoman.io/authoring/file-system.html
   * @see https://github.com/sboudrias/mem-fs-editor
   */
  writing() {
    // Copy tpls from scaffold to project
    this.fs.copyTpl(this.templatePath("sources"), this.destinationPath("frontend/src"));

    this.fs.copyTpl(
      this.templatePath("public/index.html"),
      this.destinationPath("frontend/public/index.html"),
      { title: "Webpack Preact by prod3v3loper" }
    );

    // Truffle package json
    this.fs.extendJSON(
      this.destinationPath("package.json"),
      createPackageWeb3Json(this.answers)
    );


    // frontend package.json
    this.fs.extendJSON(
      this.destinationPath("./frontend/package.json"),
      createPackageJson(this.answers)
    );

    // frontend global.config.json
    this.fs.extendJSON(
      this.destinationPath("./frontend/global.config.json"),
      createGLOBALSjson(this.answers)
    );

    // frontend tsconfig.json
    this.fs.extendJSON(
      this.destinationPath("./frontend/tsconfig.json"),
      createTsconfig(this.answers)
    );

    // Used components
    if (
      (this.comps && this.comps.indexOf(", ") > -1) ||
      this.comps.indexOf(",") > -1
    ) {
      // Split components
      this.comps = this.comps + ", welcome";
      let array = this.comps.trim().split(/\s*,\s*/);
      for (let i = 0; i < array.length; i++) {
        // Copy tpls
        this.fs.copyTpl(
          this.templatePath("components/" + array[i]),
          this.destinationPath("./frontend/components/" + array[i])
        );
      }
    } else if (this.comps) {
      this.log(this.comps);
      // Copy tpls
      this.fs.copyTpl(
        this.templatePath("components/" + this.comps),
        this.destinationPath("./frontend/components/" + this.comps)
      );
    }

    this.fs.copyTpl(
      this.templatePath("configs/webpack"), 
      this.destinationPath("./frontend")
    );

    this.fs.copyTpl(
      this.templatePath("configs/truffle-config.js"), 
      this.destinationPath("./truffle-config.js")
    );

    this.fs.copyTpl(
      this.templatePath("README.md"), 
      this.destinationPath("./README.md")
    );

    this.fs.copyTpl(
      this.templatePath("contracts"), 
      this.destinationPath("./contracts")
    );

    this.fs.copyTpl(
      this.templatePath("migrations"), 
      this.destinationPath("./migrations")
    );

    this.fs.copyTpl(
      this.templatePath("test"), 
      this.destinationPath("./test")
    );

    this.config.set("configuration", this.options.env.configuration);
  }

  /**
   * NPM Installs the dependencies
   */
  install() {
    if (this.settings.install) {
      this.spawnCommand('npm', ['install']);
      this.spawnCommand('npm', ['install'], { cwd: this.destinationPath('./frontend') });
    }

    // this.spawnCommand('composer', ['install']);
  }
};
