const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

// 打包之前先清理文件
gulp.task('clean', async () => {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

// 打包成esbuild 格式的
gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 打包成commonjs

gulp.task('cjs', () => {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(babel({ configFile: '../../.babelrc' }))
    .pipe(gulp.dest('lib/'));
});

// 声明文件的生成
// gulp.task('declaration', function () {
//   const tsProject = ts.createProject('tsconfig.pro.json', {
//     declaration: true,
//     emitDeclarationOnly: true,
//   });
//   return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
// });

// 拷贝 README 文件
gulp.task('copyReadme', async function () {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

exports.default = gulp.series('clean', 'es', 'cjs', 'copyReadme');
