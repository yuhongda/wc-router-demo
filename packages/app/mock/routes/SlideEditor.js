const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {resultData} = require('../common/utils');

router.get('/getSlideData', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: {
      slideType: '1', // 1 | 2 | 4
      coverImg: '',
      materialName: 'from mock',
      materialDesc: 'from mock',
      chartData: [
        {
          //图表类型（表格|echarts）
          chartType: '',
          chartOption: {
            title:{
              show: false,
              text:'',
              position: 'center',
            },
            xAxis:{
              unit: ''
            },
            yAxis:{
              unit: '',
              showSplitLine: false,
            },
            yAxisRight:{
              show: false,
              unit: ''
            },
            colorListIndex: 1,
          },

          //api返回数据
          data: null,

          //维度
          dimension: [
            // {
            //   id: 1,
            //   fieldName: '月份1',
            //   fieldKey: 'dt1',
            //   fieldKeyAlias: 'dt1-',
            //   type: 'dimension',
              // options: {
              //   sumOption: true,
              //   countOption: true,
              //   averageOption: true,
              //   sortOption: true
              // },
            //   selectedOption: {}
            // }
          ],

          //图表数据
          valueList: [
            // {
            //   id: 1,
            //   fieldName: '月份1',
            //   fieldKey: 'dt1',
            //   fieldKeyAlias: 'dt1-',
            //   type: 'dimension',
              // options: {
              //   sumOption: true,
              //   countOption: true,
              //   averageOption: true,
              //   sortOption: true
              // },
            //   selectedOption: {},
            //   chartDataOption: {
            //     type:'bar',
            //   }
            // }
          ],
          where:[
            // {
            //   id: 1,
            //   fieldName: '月份1',
            //   fieldKey: 'dt1',
            //   type: 'dimension',
            //   whereType: 'checkboxGroup',
            //   expression: '',
            //   value: null,
            // }
          ]
        }
      ]
    }
  });

  res.send(ret);
});

router.get('/getReportCategory', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: [
      {
        label: '分类1',
        value: 1
      },
      {
        label: '分类2',
        value: 2
      }
    ]
  });

  res.send(ret);
});

router.post('/getDatatable', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: {
      themeNameList:[
        {
          id: 1,
          name: '网站用户分析1',
          dt: new Date().getTime(),
          categoryKey: 1,
          categoryName: '品牌',
          datasource: [
            {
              id: 1,
              fieldName: '月份1',
              fieldKey: 'dt1',
              type: 'dimension|value',
              whereType: 'checkboxGroup',
              options: {
                sumOption: false,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 2,
              fieldName: '月份2',
              fieldKey: 'dt2',
              type: 'dimension',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 3,
              fieldName: '月份3',
              fieldKey: 'dt3',
              type: 'dimension',
              whereType: 'radioGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 4,
              fieldName: '用户数量',
              fieldKey: 'data1',
              type: 'value',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 5,
              fieldName: '用户数量2',
              fieldKey: 'data2',
              type: 'value',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            }
          ]
        },
        {
          id: 2,
          name: '网站用户分析2',
          dt: new Date().getTime(),
          categoryKey: 2,
          categoryName: '舆情',
          datasource: [
            {
              id: 1,
              fieldName: '月份1',
              fieldKey: 'dt1',
              type: 'dt',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 2,
              fieldName: '月份2',
              fieldKey: 'dt2',
              type: 'dimension',
              whereType: 'radioGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 3,
              fieldName: '月份3',
              fieldKey: 'dt3',
              type: 'dimension',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 4,
              fieldName: '用户数量',
              fieldKey: 'data1',
              type: 'value',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            },
            {
              id: 5,
              fieldName: '用户数量2',
              fieldKey: 'data2',
              type: 'value',
              whereType: 'checkboxGroup',
              options: {
                sumOption: true,
                countOption: true,
                averageOption: true,
                sortOption: true
              }
            }
          ]
        }
      ]
    }
  });

  res.send(ret);
});

router.post('/saveAsMaterial', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: {
      success: true
    }
  });

  res.send(ret);
});

router.get('/getMaterialData', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    total: 100,
    data: _.times(8, i => {
      return {
        id: i, 
        materialName: `素材名称${i}`,
        materialDesc: '素材描述',
        slideType: '1', // 1 | 2 | 4
        coverImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0AAAAHUCAYAAAATC0g+AAAgAElEQVR4Xu3dDbCdVXkv8AXylYCpUCJa1GhURBAE1EQrEEgtQjU0mosWmnasg7Ve2lKuJdMpM7dcZi73zpRplcYhGaoUozW9kCA6oCCMVBujwVSMkRikgDQI0chHgHxADHfWe2/OgEbOPh/r5HnX+p0ZR+G8e+31/P7rIP/svd+z1zPPPPNM8kWAAAECBAgQIECAAIEGBPZSgBpI2YgECBAgQIAAAQIECHQCCpCDQIAAAQIECBAgQIBAMwIKUDNRG5QAAQIECBAgQIAAAQXIGSBAgAABAgQIECBAoBkBBaiZqA1KgAABAgQIECBAgIAC5AwQIECAAAECBAgQINCMgALUTNQGJUCAAAECBAgQIEBAAXIGCBAgQIAAAQIECBBoRkABaiZqgxIgQIAAAQIECBAgoAA5AwQIECBAgAABAgQINCOgADUTtUEJECBAgAABAgQIEFCAnAECBAgQIECAAAECBJoRUICaidqgBAgQIECAAAECBAgoQM4AAQIECBAgQIAAAQLNCChAzURtUAIECBAgQIAAAQIEFCBngAABAgQIECBAgACBZgQUoGaiNigBAgQIECBAgAABAgqQM0CAAAECBAgQIECAQDMCClAzURuUAAECBAgQIECAAAEFyBkgQIAAAQIECBAgQKAZAQWomagNSoAAAQIECBAgQICAAuQMECBAgAABAgQIECDQjIAC1EzUBiVAgAABAgQIECBAQAFyBggQIECAAAECBAgQaEZAAWomaoMSIECAAAECBAgQIKAAOQMECBAgQIAAAQIECDQjoAA1E7VBCRAgQIAAAQIECBBQgJwBAgQIECBAgAABAgSaEVCAmonaoAQIECBAgAABAgQIKEDOAAECBAgQIECAAAECzQgoQM1EbVACBAgQIECAAAECBBQgZ4AAAQIECBAgQIAAgWYEFKBmojYoAQIECBAgQIAAAQIKkDNAgAABAgQIECBAgEAzAgpQM1EblAABAgQIECBAgAABBcgZIECAAAECBAgQIECgGQEFqJmoDUqAAAECBAgQIECAgALkDBAgQIAAAQIECBAg0IyAAtRM1AYlQIAAAQIECBAgQEABcgYIECBAgAABAgQIEGhGQAFqJmqDEiBAgAABAgQIECCgADkDBAgQIECAAAECBAg0I6AANRO1QQkQIECAAAECBAgQUICcAQIECBAgQIAAAQIEmhFQgJqJ2qAECBAgQIAAAQIECChAzgABAgQIECBAgAABAs0IKEDNRG1QAgQIECBAgAABAgQUIGeAAAECBAgQIECAAIFmBBSgZqI2KAECBAgQIECAAAECCpAzQIAAAQIECBAgQIBAMwIKUDNRG5QAAQIECBAgQIAAAQXIGSBAgAABAgQIECBAoBkBBaiZqA1KgAABAgQIECBAgIAC5AwQIECAAAECBAgQINCMgALUTNQGJUCAAAECBAgQIEBAAXIGCBAgQIAAAQIECBBoRkABaiZqgxIgQIAAAQIECBAgoAA5AwQIECBAgAABAgQINCOgADUTtUEJECBAgAABAgQIEFCAnAECBAgQIECAAAECBJoRUICaidqgBAgQIECAAAECBAgoQM4AAQIECBAgQIAAAQLNCChAzURtUAIECBAgQIAAAQIE9kgB+trXvpYOOuigdMIJJwwlsHLlyrRu3bo0adKkNHPmzDR9+nTpECBAgAABAgQIECBAYFwFJrwArV27Nl177bVdyTnjjDO6YVatWpVWr16d5syZkzZv3pyuv/76dO6556apU6eO67AWI0CAAAECBAgQIECgbYEJLUCbNm1Kn/70p9PRRx+ddu7cOVSAlixZkk4++eQ0bdq0Lo1bbrklTZkyJc2YMaPtdExPgAABAgQIECBAgMC4CkxYAXrqqafSlVdemX7nd34nbdy4MT3yyCNdAcpF6JJLLkkLFixIkydP7obLrxKtX78+zZs3b1yHtRgBAgQIECBAgAABAm0LTFgB+vznP58OOeSQ7pWeb37zm0MFKL8qtHDhwnTxxRcPJbFhw4a0bNmydP7557edjukJECBAgAABAgQIEBhXgQkpQN/5znfSnXfemc4+++y09957P6cA5VeGLr300nTRRRelfffdtxsuv/pz++23p/nz5z/vsHfddVc64ogjxhXEYgQIECBAgAABAgQI1CswIQXoqquuSg899FDaf//9O8nt27d3/zn44IO7V3kWL16c5s6dmw477LDu+ytWrEg7duxIs2bNGpJfvnx5WrNmzXOSyG+lu+KKK+pNx2QECEy4wKOP70z/+5OPTvjzekICfRN48xv2T//lHQf2bdv2S4AAgTQhBejpp59OzzzzzBB3vuvbo48+mk477bS03377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EVCAnAECBPoqoAD1NTn7JkCgiIACVITVohUKKEAVhmokAo0IKECNBG1MAgQGE1CABnNyFQEFyBkgQKCvAhNWgJ588sm0Zs2atG7dunTooYemY445Jr3qVa8aclu5cmX3vUmTJqWZM2em6dOnD2t68cUXp/wfXwQIEBgvAQVovCStU7uAAlR7wuYjUK/AhBWga6+9Nu2zzz7pLW95S9q0aVO67rrr0oUXXpgOPPDAtGrVqrR69eo0Z86ctHnz5nT99denc889N02dOvV55RWgeg+myQjsKQEFaE/Je96+CShAfUvMfgkQ2CUwIQUol5qrr746/fEf/3Haf//9u+desmRJ9yrQcccd1/3vk08+OU2bNq373i233JKmTJmSZsyYoQA5qwQITKiAAjSh3J6sxwIKUI/Ds3UCjQtMSAF6tvHOnTvTAw88kD7zmc+k8847Lx100EHpkksuSQsWLEiTJ0/uLl27dm1av359mjdvngLU+AE1PoGJFlCAJlrc8/VVQAHqa3L2TYDAhBagp59+Ol122WVp+/bt6c1vfnN697vf3b0dbuHChc/5LM+GDRvSsmXL0vnnn68AOaMECEyogAI0odyerMcCClCPw7N1Ao0LTGgB2mWdS89nP/vZ9I53vCO99rWvTZdeemm66KKL0r777ttdkl/9uf3229P8+fMVoMYPqPEJTLSAAjTR4p6vrwIKUF+Ts28CBCakAP3Hf/xH+u53v5ve+973DonfdNNNaceOHeld73pXWrx4cZo7d2467LDDuu+vWLGi+96sWbOGrl++fHl3F7lnf23cuDFdccUVUiRAgMC4CShA40ZpocoFaipAf/q/fpae3vFM5YkZj8DYBKa9dJ/01+e+aGyLBHn0hBSghx9+OF1++eXpnHPOSUcccUR65JFH0lVXXZXe8573dLfCzmVo69at6cwzz0zbtm1LixYt6grRcLfCdhe4IKfINghUJKAAVRSmUYoK1FaANv7s50W9LE6g7wLHH7mfAjTSEPONDb7+9a+nRx99tLvZwfHHH9/d+S1/5dKzdOnS9OCDD3afD8p/f/bs2cM+hQI0LJELCBAYoYACNEIwlzcroAA1G73BGxVQgMYQ/BNPPNH97p+99trrl1bZsmVL9zmgXZ8FGu5pFKDhhHyfAIGRCihAIxVzfasCClCryZu7VQEFKEjyClCQIGyDQEUC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BSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFKMgBUICCBGEbBBQgZ4BAcwIKUHORG7hxAQUoyAFQgIIEYRsEFCBngEBzAgpQc5EbuHEBBSjIAVCAggRhGwQUIGeAQHMCClBzkRu4cQEFqMABWLlyZVq3bl2aNGlSmjlzZpo+ffqwz6IADUvkAgITJvDfP/yidMxr95uw5yv1RI8+vjN96H9sKrW8dQlUI6AAVROlQQgMJKAADcQ0+EWrVq1Kq1evTnPmzEmbN29O119/fTr33HPT1KlTn3cRBWhwY1cSKC2gAJUWtj6BWAIKUKw87IZAaQEFaJyFlyxZkk4++eQ0bdq0buVbbrklTZkyJc2YMUMBGmdryxEoJaAAlZK1LoGYAgpQzFzsikApAQVoHGV37tyZLrnkkrRgwYI0efLkbuW1a9em9evXp3nz5ilA42htKQIlBRSgkrrWJhBPQAGKl4kdESgpoACNo+6mTZvSwoULU347266vDRs2pGXLlqXzzz9fARpHa0sRKCmgAJXUtTaBeAIKULxM7IhASQEFaBx1n3rqqXTppZemiy66KO27777dyvnVn9tvvz3Nnz//eZ/pL//yL9Nll102jrv55aW+9b3tadktTxZ9DosTqEHgD959UPGbIDz00EPpJS95SVGufBOES//x0aLPYXECNQjMOGb/9F/ecWDxUSbi537B3z9cfA5PQKDvAi964d7pr899UfExJuJnfq9nnnnmmeKTDPMEixcvTnPnzk2HHXZYd+WKFSvSjh070qxZs4YeuXz58rRmzZqhv966dWu68cYbh32b3J6ezfMTIDB+Arfddls65ZRTxm9BKxEgEF7Az334iGyQwLgK3HPPPenTn/70uK75i4uFKEA33XRTyoXmzDPPTNu2bUuLFi3qCtFwt8KeiLvAFdW3OAECIxLwMz8iLhcTqELAz30VMRqCwMACE/EzH6IA5dKzdOnS9OCDD6bt27d3d4SbPXv2sFATATTsJlxAgMCECfiZnzBqT0QgjICf+zBR2AiBCRGYiJ/5EAVol+aWLVu6zwHt+izQcMoTATTcHny/rMCPfvSj9Gu/9mvpRS8q/57TspNYfTwE/MyPh2LsNfzMx85nT+zOz/2eUJ+453zkkUfS448/nl7xildM3JN6ptACE/EzH6oAjTSN/NmhD3/4wyN9mOt7IPDoo4+mr3zlK+nuu+9Or3nNa9JZZ53Vg13bYmkBP/Olhffc+n7m95x99Gf2cx89odHtL7/j5xvf+Eb69re/nV7wghekP/uzPxv4D8BH94we1ReBifiZ73UB6kuQ9jm4QL4rYP4HYr4L4Dve8Y70hje8oftMWP582K5flDv4aq4kQCC6gJ/56AnZH4HxFcj33vre977X/dL7Y489Np100kkpfxY8v9MjfwTCF4GJEFCAJkLZcwwkkH8B7s0339z9A/HEE09MBxxwQPr5z3+ebrjhhvTAAw90r/btvffeA63lIgIE4gv4mY+fkR0SGE+B/P/l+Q6+L3zhC9Npp52WDjnkkG75f//3f09f+MIX0gUXXNC97d0XgdICClBpYesPLHDdddd1/1DMr/zkr/z2ty996Uvd3QAffvjhdPTRR6cTTjhh4PVcSIBAbAE/87HzsTsC4y3wne98p3vL24c+9KFu6Z/+9KfdH3zu3LkzHXrooSl/FnzevHnj/bTWI/BLAgqQQxFGYPPmzekTn/hE+r3f+720cuXK9PTTT6fTTz+9+/1QmzZtSldddVX60z/90zRp0qQwe7YRAgRGL+BnfvR2HkmgjwK56Fx55ZXprW99a8q/7PIHP/hB9//zr3vd67rf/5j/HeC9731vevnLX97H8ey5RwIKUI/Cqm2r+V9+pkyZ8pyxvv71r6dbb701vf/970+vf/3ru+89+eSTKf8ivPy5oN/8zd/sXjb3RYBAHQJ+5uvI0RQEdiewu/+fv//++9OnPvWpdOqpp6a3v/3taZ999une7r5q1aru/+vz2+LyK0Te8u5MlRRQgErqWvtXCuRS87d/+7fpAx/4QHrlK185dF1+1ecf/uEfugL0kpe8pHupfMWKFd1ngo466qh0xRVXpD/6oz/qXir3RYBAPwQ2bNiQctG577770qxZs9Lb3va2tNdee3Wb9zPfjwztksBIBXL5+bu/+7v0wQ9+8JducX3ttdemww8/vPtnwV133dXdBCHf8TX/82HZsmXpmGOOSccdd9xIn9L1BAYWUIAGpnLheAp87WtfS+vWreve9/uLNze4884701e/+tXue/nzP6eccko68MADu6fPhejee+91W+zxDMNaBAoKbNy4sfvT3ve9731p6tSpKf+Lz6te9aruT393ffmZLxiApQnsIYH8Ss+//Mu/dO/0+MVXdPJt7/MfaOa3uuW7wr3zne9ML37xi7ud/uQnP0lXX311+uhHP+pVoD2UXQtPqwC1kHKwGbdt29a9BzgXn/zf+U+Ann1zg/wPw4ULF3a3w3zjG984tPv8J8W5GOU/Tc5/ouSLAIH4AvlWt/mtLLNnz+42+/3vfz/lPwD5yEc+MrR5P/Pxc7RDAiMVyLe6fuKJJ1K+2+Ob3/zmdPzxxz9niXw3uHwb/Llz5z7nnwX5D0Suueaa9Fd/9Vfd3WB9ESghoACVULXmsAL5tz7nO77lV3OWLl2a/uIv/uI5NzfI7wXOvx06/6nQrq/8ilF+C01+RciNEIYldgGBEAL5M335rTDvec97uv2sX7++e6//H/zBHzxnf37mQ8RlEwTGTSC/7TW/6nvQQQelJUuWdLe4fnahya8O51eEzzvvvKHnzHd8zf/MyP8/nx/ri0ApAQWolKx1BxbIL5EffPDBz7m5Qf6H4Gc/+9nuN0P7IkCgvwL5Tk/5P7vez5/f359/qXH+E+Fnf/mZ72/Gdk5gdwJf/OIXu5/zl770pSnf8j5/7i9//veMM84Y+v0/+bPAf/Inf9L9gagvAhMpoABNpLbn2q1A/hefyy+/vLvF9a6bG+TfBZBvh3nhhRdSI0CgEoGtW7emj33sY917+/fbb79uqvxZv/wWOT/zlYRsDAL/XyB/juess87qik++ycEdd9zRlZ+ZM2cOGeXPAeWbHu36hajwCEyUgAI0UdKe53kF8kve+eXwc845p7sufyYgvz0u3wTBFwECdQjkm5jkX3yY/yUo/26v/AsQX/3qV3f/QuRnvo6MTUFgl8DHP/7x7ldX5LfC5d/7s3379u7V4LPPPnsIKX+mN//Bp8/6ODcTLaAATbS459utQP4H4ze+8Y3uFpju/e+QEKhT4HOf+1w68sgju/KT/zQ43xghfzDaz3ydeZuqbYH8Ky3yr7nId3zMnwPKNzLK/z9/0kkn+Zlv+2iEmF4BChGDTRAgQKB+gfy5vh/+8IfdnwrnfwlyM5P6MzdhuwL5Dm+73uraroLJowooQFGTsS8CBAhUJnDPPfd0vxPELzKuLFjjECBAoGcCClDPArNdAgQIECBAgAABAgRGL6AAjd7OIwkQIECAAAECBAgQ6JmAAtSzwGyXAAECBAgQIECAAIHRCyhAo7fzSAIECBAgQIAAAQIEeiagAPUsMNslQIAAAQIECBAgQGD0AgrQ6O08kgABAgQIECBAgACBngkoQD0LzHYJECBAgAABAgQIEBi9gAI0ejuPJECAAAECBAgQIECgZwIKUM8Cs10CBAgQIECAAAECBEYvoACN3s4jCRAgQIAAAQIECBDomYAC1LPAbJcAAQIECBAgQIAAgdELKECjt/NIAgQIECBAgAABAgR6JqAA9Sww2yVAgAABAgQIECBAYPQCCtDo7TySAAECBAgQIECAAIGeCShAPQvMdgkQIECAAAECBAgQGL2AAjR6O48kQIAAAQIECBAgQKBnAgpQzwKzXQIECBAgQIAAAQIERi+gAI3eziMJECBAgAABAgQIEOiZgALUs8BslwABAgQIECBAgACB0QsoQKO380gCBAgQIECAAAECBHomoAD1LDDbJUCAAAECBAgQIEBg9AIK0OjtPJIAAQIECBAgQIAAgZ4JKEA9C8x2CRAgQIAAAQIECBAYvYACNHo7jyRAgAABAgQIECBAoGcCClDPArNdAgQIECBAgAABAgRGL6AAjd7OIwkQIECAAAECBAgQ6JmAAtSzwGyXAAECBAgQIECAAIHRCyhAo7fzSAIECBAgQIAAAQIEeiagAPUsMNslQIAAAQIECBAgQGD0AgrQ6O08kgABAgQIECBAgACBngkoQD0LzHYJECBAgAABAgQIEBi9gAI0ejuPJECAQHiBJ7c+k665+cl0w9e3jPte33XS5HTWaQemAyfttdu1N23alO65557nfd6DDz44vfa1r93tNVdddVU66aST0mte85pf+v4zzzyTbr311jR79uz0iU98In3kIx/p/vq3f/u305e+9KV0xBFH7Hbdz33uc+mAAw7Y7fNt2bIl/f7v//64O1mQAAECBGIJKECx8rAbAgQIjKvAVdc/kW4sUH52bTIXoPedduBu97x27dq0YsWK9PrXv777/v3335+2bdvWlZP89bOf/Szt2LEjnXXWWd1f5wLyve99b2itXJ6efPLJdMwxxwz9vcMPPzy97GUv6/76pptuSvmvv/jFL3bF55FHHun+e/HixV0xeulLX9pdlwvPPvvs0/3viy++OJ166qm73e9Xv/rV9Dd/8zdpr712X+jGNRiLESBAgMAeE1CA9hi9JyZAgEB5gf/6P3+WfvrIz4s90YsPeUH6xF//+q8sQPfdd19697vf3X3/W9/6VnriiSfSb/3Wb3V//cMf/jDdcccdQwXopz/9afqnf/qnNGPGjN2ulwvUK17xijRr1qyUX13KheUFL3hBWrNmTTr66KO74pLX/vjHP55+/dd/vXuu/HXOOeekadOmDRWgvJ/dlZxcpBSgYkfFwgQIEAgjoACFicJGCBAgMP4CZ/3lT8Z/0V9Y8ZrLXvwrC9C//uu/piOPPLL7/oYNG9JTTz2Vpk+f3v31ww8/3P33rleAcgH6/Oc/nz70oQ/tdr2VK1d2j88FKP93Xm/ZsmXdq0T5bXRve9vb0s6dO9N1112XLrzwwnTbbbelyZMnd4Uqv/KUX2G68847U3773K/6Ouqoo9KBBx74K98mVxzTExAgQIBAcQEFqDixJyBAgMCeE9jTBejb3/52etOb3tQB3H333V0JOfbYY7u/fuihh9Kjjz76nAK0dOnSNGfOnN2Cff/7308HHXRQV4Aee+yxtHz58nTcccelL3/5y93f+8EPfpCmTp2aVq9enc4777zuM0H5+7mA/ehHP0r5LXmDfOVXk175ylcOcqlrCBAgQKCHAgpQD0OzZQIECAwqsKcL0EjeAvfggw92b4F79atf/SvHy6/QvOENb0g//vGPu1eQ8lvb8lvXzj777O7zRIsWLeo+c5Q/95NfMZo/f/7QZ4Fy4brmmmvSb/zGb3Tr588M5a98I4ZdhWzu3Lnd54p8ESBAgEC9AgpQvdmajAABAmlPFqD8+Z78Frhdn7/Jb3HLb13bVTDyqzj5LWq73gKXX8HJr/LMmzdv2OTyDRRWrVqVcmnavn1794pN/jxQvmtcLkJXXnll+vnPf54++tGPpr333rtb74EHHkj//M//PHRThvzX+WvXfu66665uLy9/+cuHfX4XECBAgEB/BRSg/mZn5wQIEBhWYE8WoHyTgscff3zoLW+53OTP4ux6S1z+DE8uMLsK0LM/4zPcYFu3bu1uonDDDTek97///d1b3O699970wQ9+sHvokiVL0qGHHprOOOOMoaVy4cmfMXr729/e/b3169d35WjXbbjz8+cbJChAw+n7PgECBPotoAD1Oz+7J0CAwPMK7MkClD/Pc8IJJwzd9nq4u8Dl69/4xjcOvUIzXLT51aX8uZ78+Z+bb745/eEf/mFXejZu3Jg+9alPpf3337+7ocILX/jCbqn8qlH+HNKur1yg8qtGu27KkP9+/p1D+Q5yvggQIECgXgEFqN5sTUaAAIE99ha4/Pmcyy+/PC1YsKB7m1v+2lWA8u/hyW9Py3dp27x5c/eWt5/85Cfp6quvThdccMHQ7+wZLr782HzHt/zKTy47p59+evd2u09+8pPpXe96V7f2d7/73fSBD3yg+37+PFJ+pWjXV/49Q/n3A+Vba+/6yq/+PLsQDbcH3ydAgACB/gkoQP3LzI4JECAwsMCeegUo/26e/IrLs3/p6K63wOXC8Y//+I9dMcpvUcu/GDW/XS7ffvpX/Q6gXxw4r3XjjTemt7zlLen444/vPlv0zW9+s3vL3ete97qht9l95Stf6W6IkF8Z+rd/+7fnLJPfjpe/8vef/XXiiScO/CrUwEG4kAABAgTCCChAYaKwEQIECIy/wIV/93C678c7xn/h/7/iK39jn/S3/+2Q3a6ffyfPrhsQDLeBp59+urtk3333He7S7vv5Rgf5l5nmt7A9+ysXof3222/ob+Xf+ZOvHXTdgZ7cRQQIECDQawEFqNfx2TwBAgSeX+D/3PxkuubmJ4sxnXXagel9px1YbH0LEyBAgACB8RZQgMZb1HoECBAIJnDD17akVd/fnu57YEfasu2ZMe9u8gF7pVcevk+acfT+6V0n/7/P9/giQIAAAQJ9EVCA+pKUfRIgQIAAAQIECBAgMGYBBWjMhBYgQIAAAQIECBAgQKAvAgpQX5KyTwIECBAgQIAAAQIExiygAI2Z0AIECBAgQIAAAQIEFTv9UgAAAjpJREFUCPRFQAHqS1L2SYAAAQIECBAgQIDAmAUUoDETWoAAAQIECBAgQIAAgb4IKEB9Sco+CRAgQIAAAQIECBAYs4ACNGZCCxAgQIAAAQIECBAg0BcBBagvSdknAQIECBAgQIAAAQJjFlCAxkxoAQIECBAgQIAAAQIE+iKgAPUlKfskQIAAAQIECBAgQGDMAgrQmAktQIAAAQIECBAgQIBAXwQUoL4kZZ8ECBAgQIAAAQIECIxZQAEaM6EFCBAgQIAAAQIECBDoi4AC1Jek7JMAAQIECBAgQIAAgTELKEBjJrQAAQIECBAgQIAAAQJ9EVCA+pKUfRIgQIAAAQIECBAgMGYBBWjMhBYgQIAAAQIECBAgQKAvAgpQX5KyTwIECBAgQIAAAQIExiygAI2Z0AIECBAgQIAAAQIECPRFQAHqS1L2SYAAAQIECBAgQIDAmAUUoDETWoAAAQIECBAgQIAAgb4IKEB9Sco+CRAgQIAAAQIECBAYs4ACNGZCCxAgQIAAAQIECBAg0BcBBagvSdknAQIECBAgQIAAAQJjFlCAxkxoAQIECBAgQIAAAQIE+iKgAPUlKfskQIAAAQIECBAgQGDMAgrQmAktQIAAAQIECBAgQIBAXwQUoL4kZZ8ECBAgQIAAAQIECIxZQAEaM6EFCBAgQIAAAQIECBDoi4AC1Jek7JMAAQIECBAgQIAAgTELKEBjJrQAAQIECBAgQIAAAQJ9EVCA+pKUfRIgQIAAAQIECBAgMGaB/ws7SWt045a/VgAAAABJRU5ErkJggg==',
        chartData: [
          {
            //图表类型（表格|echarts）
            chartType: '',
            chartOption: {
              title:{
                show: false,
                text:'',
                position: 'center',
              },
              xAxis:{
                unit: ''
              },
              yAxis:{
                unit: '',
                showSplitLine: false,
              },
              yAxisRight:{
                show: false,
                unit: ''
              },
              colorListIndex: 1,
            },

            //api返回数据
            data: null,

            //维度
            dimension: [
              // {
              //   id: 1,
              //   fieldName: '月份1',
              //   fieldKey: 'dt1',
              //   type: 'dimension',
                // options: {
                //   sumOption: true,
                //   countOption: true,
                //   averageOption: true,
                //   sortOption: true
                // },
              //   selectedOption: {}
              // }
            ],

            //图表数据
            valueList: [
              // {
              //   id: 1,
              //   fieldName: '月份1',
              //   fieldKey: 'dt1',
              //   type: 'dimension',
                // options: {
                //   sumOption: true,
                //   countOption: true,
                //   averageOption: true,
                //   sortOption: true
                // },
              //   selectedOption: {},
              //   chartDataOption: {
              //     type:'bar',
              //   }
              // }
            ],
            where:[
              // {
              //   id: 1,
              //   fieldName: '月份1',
              //   fieldKey: 'dt1',
              //   type: 'dimension',
              //   whereType: 'checkboxGroup',
              //   expression: '',
              //   value: null,
              // }
            ]
          }
        ]
      };
    })
  });

  res.send(ret);
});

router.get('/getMaterialCategory', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: [
      {
        label: '分类1',
        value: 1
      },
      {
        label: '分类2',
        value: 2
      }
    ]
  });

  res.send(ret);
});


router.post('/getCurrentChartData', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData, {
    data: _.times(12, j => {
      const d = {};
      params.dimension.forEach((item, i) => {
        if(i == 0){
          d[item.fieldKeyAlias] = `${j+1}月`;
        }else{
          d[item.fieldKeyAlias] = `${Math.ceil((j+1)/3)}季度`;
        }
      });
      params.valueList.forEach((item, i) => {
        d[item.fieldKeyAlias] = _.random(100);
      });
      params.where.forEach((item, i) => {
        d[item.fieldKey] = `${j+1}月`;
      });
      return d;
    })
  });

  res.send(ret);
});

router.post('/getWhereData', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData, {
    data: _.times(12, j => {
      return {
        label: `${j+1}月`,
        value: `${j+1}月`
      };
    })
  });

  res.send(ret);
});


module.exports = router;
