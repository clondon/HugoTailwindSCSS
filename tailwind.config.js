const themeDir = __dirname + '/../../';
module.exports = {
  content: [
    `${themeDir}/layouts/**/*.html`, 
    `${themeDir}/content/**/*.md`
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
        
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        'ashiksred': '#850000',
        'friendly_black': '#000000',
        'friendly_white': '#f3f1ed',
        'background_color': '#555555',
      },
      fontFamily: { 
        'sans': ['Montserrat', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif']
      },
    }
  },
  variants: {},
  plugins: []

}
