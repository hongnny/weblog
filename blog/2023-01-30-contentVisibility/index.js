import React from 'react'
const styles = {
  hidden: {
    "contentVisibility": "hidden"
  },
  item: {
    "width": "60px",
    "height": "60px",
    "lineHeight": "60px",
    "textAlign": "center",
    "color": "#fff",
    "background": "#000",
    "marginBottom": "10px"
  }
}

export function RenderHtml({hidden}) {
  return (
    <div className="g-wrap">
      <div style={styles.item}>1111</div>
      <div
        style={hidden ? {
          ...styles.hidden,
          ...styles.item
        } : styles.item}>2222</div>
    </div>
  )
}