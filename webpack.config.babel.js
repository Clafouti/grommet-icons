import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const env = 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  new CopyWebpackPlugin(
    [
      { from: './public' },
      { from: './README.md' },
      { from: './package.json' },
    ]
  ),
];

export default {
  devtool: 'hidden-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet-icons.min.js',
    libraryTarget: 'var',
    library: 'GrommetIcons',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-addons-transition-group': 'React.addons.TransitionGroup',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
