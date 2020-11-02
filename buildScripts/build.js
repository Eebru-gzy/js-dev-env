process.env.NODE_ENV = 'production';
import webpack from 'webpack';
import webpackconfig from '../webpack.config.prod';
import chalk from 'chalk';

console.log(chalk.blue('Generating minified bundle for production. This would take a while'));

webpack(webpackconfig).run((err, stat) => {
	if (err){
		console.log(chalk.red(err))
		return 1;
	}

	const jsonStats = stat.toJson();

	if(jsonStats.hasErrors) {
		jsonStats.errors.map(err => console.log(chalk.red(err)));
	} else if (jsonStats.hasWarnnings) {
		console.log('Webpack generated the following warnings');
		jsonStats.warnings.map(warn => console.log(chalk.yellow(warn)));
	}

	console.log('webpack stats: ', stat);

	console.log(chalk.green('Your app has been built for production and is now in "dist" directory'));

	return 0;
})
