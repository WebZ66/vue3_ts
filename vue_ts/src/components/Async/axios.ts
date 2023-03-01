export const axios = {
  //Promise<T> 即resolve里面的是什么类型的值 如果是number 就是Promise<number>
  get<T>(url: string): Promise<T> {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest()

      xhr.open('GET', url)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          resolve(JSON.parse(xhr.responseText))
        }
      }
    })
  }
}
