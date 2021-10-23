---
layout: post
title: '저지챌린지 - 12373 Lost Password'
date: 2021-09-26 19:30
folder: JudgeChallange
tags: [programming,algorithm]
---

<!-- 기본적인 Markdown 문서 틀은 Kakao의 기술 블로그를 참고하였다. - https://github.com/kakao/kakao.github.io -->
<!-- 사이트 기본 틀이 잡히고 Jekyll이 정상 작동/개인적으로 설정이 완료될 시 반드시 문서를 그에 맞게 업데이트할것 -->

## 2021/09 Week 3 - [[11528] Compositions](https://www.acmicpc.net/problem/11528)

## 문제

### 원문

A composition of an integer n is an ordered set of integers which sum to n. Two compositions with the same elements but in different orders are considered different (this distinguishes compositions from partitions). For example, all the compositions of the first few integers are:

```json
1: {1}
2: {1+1, 2}
3: {1+1+1, 1+2, 2+1, 3}
4: {1+1+1+1, 1+1+2, 1+2+1, 1+3, 2+1+1, 2+2, 3+1, 4}
```

Note that 1+2 and 2+1 each count as distinct compositions of 3. As you may have suspected, there are 2(n-1) compositions of n.

In this problem, we set conditions on the elements of the compositions of n. A composition misses a set S if no element of the composition is in the set S. For example, the compositions of the first few integers which miss the set of even integers are:

```json
1: {1}
2: {1+1}
3: {1+1+1, 3}
4: {1+1+1+1, 1+3, 3+1}
```

No odd integer can have a composition missing the set of odd integers and any composition of an even integer consisting of only even integers must be 2 times a composition of n/2.

For this problem you will write a program to compute the number of compositions of an input integer n which miss the elements of the arithmetic sequence {m + i*k | i = 0,1,…}

### 한글 번역

정수 n의 컴포지션은, 모든 합이 n이 되는 정수들이 정렬된 집합이다. 요소는 같지만 순서가 다른 두 컴포지션은 서로 다른 것으로 간주된다(이런 이유로, 컴포지션이 파티션과 분리). 예를 들어서, 다음 예시에서 처음 제공된 정수에 대한 컴포지션들은 다음과 같다:

```json
1: {1}
2: {1+1, 2}
3: {1+1+1, 1+2, 2+1, 3}
4: {1+1+1+1, 1+1+2, 1+2+1, 1+3, 2+1+1, 2+2, 3+1, 4}
```

보다시피, 1+2와 2+1은 서로 다른 구성임을 인지하여야 한다. 깨달았겠지만, n의 합구성의 요소 수는 2(n-1)이다.

이 문제에서, 우리는 n에