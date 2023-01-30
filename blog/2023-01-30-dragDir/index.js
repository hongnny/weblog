import React from 'react'

const styles = {
  width: '400px',
  height: '200px',
  border: '1px solid gray',
  padding: '10px',
  borderRadius: '5px'
}

export default function DragDirectory() {
  const dragOver = (evt) => {
    evt.preventDefault();
  }
  const drop = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const items = evt.dataTransfer.items;
    if (items.length > 1) {
      return console.log("一次只允许上传一个文件夹");
    }
    const item = items[0].webkitGetAsEntry();
    if (item && item.isDirectory) {
      traverseFileTree(item).then(res => {
        console.log(res);
      });
    }
  }
  const traverseFileTree = (item) => {
    return new Promise((resolve, reject) => {
      let res = [];
      let timer;
      const internalProces = (item, path, res) => {
        if (item.isFile) {
          item.file(file => {
            file.path = path + file.name;
            const newFile = new File([file], file.path, { type: file.type });
            res.push(newFile);
            timer = setTimeout(() => {
              resolve(res)
            }, 600);
          });
        } else if (item.isDirectory) {
          clearTimeout(timer);
          const dirReader = item.createReader();
          dirReader.readEntries(entries => {
            for (let i = 0; i < entries.length; i++) {
              internalProces(entries[i], path + item.name + "/", res);
            }
          }, (error) => reject(error));
        }
      };
      internalProces(item, "", res);
    })
  }
  return (
    <div
      id="area"
      style={styles}
      onDragOver={dragOver}
      onDrop={drop}
      >
        拖拽一个文件夹进来试试吧，打开控制就看到效果了
      </div>
  )
}
