'use strict'
let generators = require('yeoman-generator');
let chalk = require('chalk');    //不同颜色的info
let yosay = require('yosay');    //yeoman弹出框
let path = require('path');
let _ = require('lodash');
let Vuepackage = generators.Base.extend({
  initializing:function () { //初始化准备工作
    this.log(yosay('build start!'));
  },
  prompting:function () { //接受用户输入
    let done = this.async();//当处理完用户输入需要进入下一个生命周期阶段时必须调用这个方法

    //yeoman-generator 模块提供了很多内置的方法供我们调用，如下面的this.log , this.prompt , this.template , this.spawncommand 等

    this.log(chalk.red('Welcome to use'));
    this.name = path.basename(process.swd());
    this.version = '1.0.0';
    this.description = '';
    this.repo = '';
    this.author = '';
    this.license = 'ISC';
    var prompts = [{
      type:'input',
      name:'name',
      message:'name of app',
      default:this.name
    },{
      type:'input',
      name:'version',
      message:'version:',
      default:this.version
    },{
      type:'input',
      name:'description',
      message:'description:',
      default:this.description
    },{
      type:'input',
      name:'repo',
      message:'git repository',
      default:this.repo
    },{
      type:'input',
      name:'author',
      message:'author:',
      default:this.author
    },{
      type:'input',
      name:'license',
      message:'license:',
      default:this.license
    }];
    this.prompt(prompts).then((props)=>{
      this.name = props.name;
      this.version = props.version;
      this.repo = props.repo;
      this.author = props.author;
      this.license = props.license;
      this.description = props.description;
      done();//进入下一个生命周期
    });
  },

  writing:function () {//生成目录结构阶段
    //默认源目录就是生成器的templates目录，目标目录就是执行`yo example`时所处的目录。调用this.template用Underscore模板语法去填充模板文件
    this.directory('src', 'src');
    this.copy('.babelrc', '.babelrc');
    this.copy('.npmrc', '.npmrc');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('package.json', 'package.json');
    this.copy('READMD.md', 'READMD.md');
    this.copy('webpack.config.babel.js', 'webpack.config.babel.js');
    var pkgTpl = _.template(this.fs.read(this.templatePath('_package.json')));
    // this.log(pkg);
    this.fs.write(this.destinationPath('package.json'), pkgTpl(this.props));
  },
  generateClient: function() {
    this.log(chalk.green('generateClient'));
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.destinationPath('./');
  },
  // install: function() {      //安装依赖
  //   this.installDependencies({
  //     skipInstall: this.options['skip-install']
  //   });
  // },
  end: function() {
    this.log(yosay(
      'build end!'
    ));
  }
});
module.exports = Vuepackage;
