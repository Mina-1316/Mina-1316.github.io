Mina-1316's Github Pages
==============

## Roadmap 해야할 일
- [ ] 기본적인 마크다운 문법 이해/이에 대한 노트 작성
- [ ] [GitHub Pages](https://pages.github.com/), [Jekyll](https://jekyllrb.com/) 가동하게 만들기
- [ ] [bootstrap](https://getbootstrap.com/)테마로 정적 웹사이트 구축
  - [ ] 간단한 기본적인 

## Markdown Syntax - 마크다운 문법
> [Markdown 문법 참고 문서](https://guides.github.com/features/mastering-markdown/)
> [GitHub Docs](https://docs.github.com/en)
> [jinkyoukim-markdown_ko Repo](https://github.com/jinkyukim-me/markdown_ko)

> 주의! GitHub에서의 Markdown 문법을 설명합니다. 다른 Markdown 뷰어 프로그램이나 타 웹사이트 등에서는 작동하지 않는 기능이 있을 수 있습니다.

#### Table of contents
[1. Headers](#1-headers)<br>
[2. Emphasis](#2-emphasis)<br>
[3. Blockquotes](#3-blockquotes)<br>
[4. Lists](#4-lists)

#### 1. Headers
* '제목'을 표현하기 위한 기능.
* 텍스트 앞에 '#'을 붙임으로써 작성
* '#'의 숫자가 늘어날수록 제목의 스케일이 작아진다.(부제목 생성을 위한 기능)
* '#"은 최대 6개까지 사용 가능함
* H1, H2는 각각 제목 아래에 '===', '---'를 작성함으로써 대체 구현 가능

##### 마크다운 사용
```Markdown
H1 Used === as Alternative
==========
H2 Used --- as Alternative
----------
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```
위 코드를 실행할 경우

H1 Used === as Alternative
==========
H2 Used --- as Alternative
----------
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

로 마크다운 페이지에서 보인다.

#### 2. Emphasis
* Emphasis는 특정 부분의 텍스트릉 강조(Emphasis)하기 위한 문법이다.
* 강조하고 싶은 텍스트 양 옆에 간략화된 태그를 담으로써 표현한다.
* 강조 태그는 다른 태그를 중첩하여 사용 가능하다.

##### Types of Emphasis
Emphasis | Tag | Text Editor | Displayed 
:--------|:---:|:------------|:----------
두껍게 쓰기(Bold) | '\*\*', '\_\_' | \*\*Content\*\* 또는 \_\_Content\_\_ | **Content**
기울여 쓰기(Italic) | '\*', '\_' | \*Content\* 또는 \_Content\_ | *Content*
취소선(Canceled) | '\~\~' | \~\~Content\~\~ | ~~Content~~
두껍게 쓰기 + 기울여 쓰기*(Bold + Italic) | '\*\*\*' | \*\*\*Content\*\*\* | ***Content***
<br>

#### 3. Blockquotes
* 인용문을 표현할때 사용
* 문장 앞에 \>를 붙임으로써 사용
* 여러개의 \>를 사용함으로써 여러 줄의 인용문을 사용(최대 3개까지만 가능)
* 인용문 내의 빈 줄은 빈 \>를 가운데 끼워넣음으로써 구현
* 다른 요소들과 결합하여 사용 가능
* Blockqoutes의 위 아래 각각 한줄씩 띄워 둬 애플리케이션이 읽을 때 에러가 일어나지 않도록 조치

##### 마크다운 사용
```Markdown
> 옛날 옛적에 한 장수가 말하길
> 
>> *나의 죽음을 적에게 알리지 말라*<br>
>> **이순신**
```

해당 코드를 실행할 경우

> 옛날 옛적에 한 장수가 말하길
> 
>> *나의 죽음을 적에게 알리지 말라*<br>
>> **이순신**
#### 4. Lists
