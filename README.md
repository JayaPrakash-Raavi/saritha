# COMP7/8118 Data Mining F2024

<details>

<summary>Instructions</summary>

-   Closed book, no electronic device allowed.
-   Please put down your name and student ID at the top of your answer sheet.

</details>

## Quiz 1 (10:35-11:00, 9/10)

<details>

<summary>Quiz Questions</summary>

### Question 1

Consider the Apriori algorithm discussed in class, let $L_2$ = $\{\{A,B\}, \{B,C\}, \{C,D\}, \{A,D\}, \{D,E\}, \{A,C\}$, $\{B,E\}\}$, what are the candidates generated using Apriori for $L_3$? (Note: $L_2$ are all the frequent itemsets of size 2)

### Question 2

Given the following transaction history: $T_1$ = $\{A,B,D,E\}$, $T_2$ = $\{B,C,E,F\}$, $T_3$ = $\{B,E,D\}$, $T_4$ = $\{B,F\}$, $T_5$ = $\{A,B,C,F\}$. Let support threshold be 2, please draw the most compact FP-tree. Conditional FP-tree is not required.

### Question 3

In general, consider a set of transactions containing items $A$, $B$, and $C$; let $cf(\cdot)$ denote the confidence function, please answer true or false for the following statements on association rules: 1. $cf(A\rightarrow B) \leq cf(A\rightarrow BC)$ 2. $cf(AB\rightarrow C) > cf(A\rightarrow BC)$ 3. if $cf(A\rightarrow B) \geq cf(B\rightarrow C)$, then $cf(A\rightarrow B) \geq cf(A\rightarrow C)$

### Question 4

Please explain the relationship between *closed itemsets* vs. *maximal itemsets*.

</details>

## Quiz 2 (10:35-11:00, 9/26)

<details>

<summary>Quiz Questions</summary>

### Question 1

Consider the Minhashing algorithm we discussed in class. Below we show the original shingle-document matrix (the first table) and two permutation outputs of the matrix. Please answer the following questsion:

1.  What are the singatures of S1 and S2, respectively, based on the given matrix permutations?
2.  What is the Jaccard similarity of S1 and S2? What about the similarity of their signatures?

::: {style="display: flex; justify-content: space-between;"}
| Index | Shingle | S1  | S2  |
|-------|---------|-----|-----|
| 1     | A       | 1   | 0   |
| 2     | B       | 0   | 0   |
| 3     | C       | 1   | 1   |
| 4     | D       | 0   | 1   |
| 5     | E       | 1   | 1   |

| Index | Shingle | S1  | S2  |
|-------|---------|-----|-----|
| 1     | B       | 0   | 0   |
| 2     | C       | 1   | 1   |
| 3     | D       | 0   | 1   |
| 4     | E       | 1   | 1   |
| 5     | A       | 1   | 0   |

| Index | Shingle | S1  | S2  |
|-------|---------|-----|-----|
| 1     | D       | 0   | 1   |
| 2     | B       | 0   | 0   |
| 3     | A       | 1   | 0   |
| 4     | C       | 1   | 1   |
| 5     | E       | 1   | 1   |
:::

### Question 2

Given a LSH function $F=\{\frac{\theta}{4},\frac{3\theta}{4},0.9,0.1\}$, $\theta\in(0,2\pi)$, over data set $P$, if we know the distance of two data points $u$ and $v$ is $\frac{4\theta}{5}$, then the chances of $F(u)=F(v)$ is: A) $\leq$ 0.9; B) $\geq$ 0.9; C) $\leq$ 0.1; D) $\geq$ 0.1.

### Question 3

Pleas answer *true* or *false* for the following statements about the K-means clustering algorithm:

1.  K-means clustering works well even when the clusters have different sizes and different densities.
2.  K-means clustering algorithm iteratively updates the cluster centroids until a stopping condition is met.
3.  The initial placement of centroids in K-means clustering has no impact on the final clusters formed.

### Question 4

Given the set of data points: (0,1), (1,1), (1,4), (2,3), and (4,1), determine the final composition of two clusters when employing an agglomerative hierarchical clustering approach. For this exercise, use the single linkage method to calculate the distance between clusters. It is not necessary to provide the intermediate steps of the clustering process; only the final two clusters are required. (Note: $d(X,Y)=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$)

</details>

## Quiz 3 (10:35-11:00, 10/7)

<details>

<summary>Quiz Questions</summary>

### Question 1

Please answer *true* or *false* for the following statements about the EM cluster algorithm:

1.  It does not require any assumption of the underlying data distribution.
2.  It does not require the number of clusters as an input parameter.
3.  It can identify clusters of different densities.

### Question 2

Consider the DBSCAN algorithm, please briefly explain under what conditions two core points $u$ and $v$ are assigned to the same cluster. Also, if $w$ is a border point, how does the algorithm decide its cluster assignment?

### Question 3

Consider $F(\cdot)$ as a clustering evaluation metric, let $F(C(X))=a$, where $C(X)$ is the clustering of data set $X$. Let $X'$ be a random data set of the same domain range as $X$, and $P(\cdot)$ denote the probability function. We say $C(X)$ is statistically significant if: A)$a\leq 0.05$; B)$a\geq 0.05$; C)$P(F(C(X'))=a)\leq 0.05$; D) $P(F(C(X'))=a)\geq 0.05$.

### Question 4

Given the join probability of two random variables $X$ and $Y$, please compute the following conditional entropy: 1) $H(X|Y=1)$; 2) $H(Y|X=1)$. Hint: $H(Y|X=x)=-\sum_y p(Y=y|X=x)\log_2 p(Y=y|X=x)$.

::: {style="display: flex; justify-content: space-between;"}
| X\\Y | Y=0 | Y=1 |
|------|-----|-----|
| X=0  | 1/2 | 0   |
| X=1  | 1/4 | 1/4 |
:::

</details>

## Quiz 4 (10:35-11:00, 10/22)

<details>

<summary>Quiz Questions</summary>

### Question 1

Please answer *true* or *false* for the following statements:

1.  A classifier trained on less training data is less likely to overfit.
2.  An overly complex training model can contribute to overfitting.
3.  The k-nearest neighbor classifier explicitly learns a model from the training data.
4.  Bayesian Belief Networks excel in incorporating domain knowledge and enabling fast inference.
5.  Naive Bayes classifier operates on the assumption of conditional independence among data attributes.

### Question 2

Please list three different stop conditions for internal node splitting in the decision tree construction.

### Question 3

Consider a simple Bayesian Belief Network: $A\rightarrow B\rightarrow C$, which of the following statement is NOT correct?

A)  $P(A|B)=P(B|A)$; B) $P(C|A,B)=P(C|B)$; C) $P(C|A)=P(C|B)\cdot P(B|A)$; D) $P(B|C)=\frac{P(C|B)\cdot P(B)}{P(C)}$

### Question 4

Please briefly compare the difference between generative models and discriminative models.

</details>

## Quiz 5 (10:35-11:00, 10/31)

<details>

<summary>Quiz Questions</summary>

### Question 1

Please answer *true* or *false* for the following statements:

1.  RNN is able to capture contextual information for classification where the sequence order matters.
2.  Theoretically, SVM is as expressive as MLP.
3.  The computational complexity of SVM is dominated by the dimensionality of training data.
4.  Comparing to the basic RNN, the LSTM model tends to converge faster.
5.  A deep neural network is a variant of MLP with many hidden layers.

### Question 2

Please list three features introduced by LSTM in terms of the model design compared to the basic RNN.

### Question 3

(Multiple-Answer) Which of the following techniques could help in deriving robust error estimation of trained classifers? A) Cross validation; B) Bootstrap; C) Reserve some training data for testing; D) Balance the class distribution of training data

### Question 4

Consider the confusion matrix we have shown in class, where X is the actual class, and Y is the prediction. Please answer the following questions: (1) What are precision and recall? (express with the formula of a, b, and c); (2) Consider the ROC curve, where y-axis is the true positive rate, and x-axis is the false positive rate, please explain what the value of b and d would be at the coordinate of (1,1) in the ROC curve.

::: {style="display: flex; justify-content: space-between;"}
| X\\Y  | Y=Yes | Y=No |
|-------|-------|------|
| X=Yes | a     | b    |
| X=No  | c     | d    |
:::

</details>

## Quiz 6 (10:35-11:00, 11/12)

<details>

<summary>Quiz Questions</summary>

### Question 1

Please answer *true* or *false* for the following statements:

1.  In terms of space-saving, adjacency list is better than adjacency matrix in representing a graph.
2.  In the HITS algorithm, the hub and authority weights can be computed independently.
3.  Girvan-Newman algorithm can find overlapping communities.
4.  A graph's diameter refers to the length of the longest path.
5.  In the AGM algorithm, the probability of having a edge connecting vertices $u$ and $v$ is $1-\prod_{c\in M_u\cap M_v}(1-p_c)$, where $M_u$ and $M_v$ are the sets of communities $u$ and $v$ belong to, respectively; and $p_c$ is the probability of a vertex belonging to community $c$.

::::: {style="display: flex;"}
::: {style="flex: 1; margin-right: 2.5px;"}
### Question 2

Consider the simplified PageRank model, where each vertex’s PR score is the aggregation from its incoming neighbor’s PR score distributions. Assume all vertices' initial PR score is 0.2. After the first iteration, what are the values of PR($n_1$) and PR($n_2$)?

(Hint: $PR(x)=\sum\frac{PR(t_i)}{C(t_i)}$, where $C(\cdot)$ is the out-degree, $t_i$ is an incoming neighbor of $x$.)

![Image Alt Text](Quiz6-q2.png)
:::

::: {style="flex: 1; margin-left: 2.5px;"}
### Question 3

Consider the Girvan-Newman algorithm, we start a BFS from node $A$. Answer the following questions:

(1) The number of shortest paths from $A$ to $I$ is: A) 3; B) 4; C) 5; D) 6.

(2) When computing the betweenness using the bottom-up approach, the flow number of edge $\langle F,H\rangle$ is: A) 0.25; B) 0.75; C) 1.25; D) 1.5.

![Image Alt Text](Quiz6-q3.png)
:::
:::::

</details>

## Quiz 7 (9:45-10:10, 11/19)

<details>

<summary>Quiz Questions</summary>

### Question 1

Please answer *true* or *false* for the following statements:

1.  The HyperLogLog algorithm is devised for membership test over streaming data.
2.  Bloom filter's output must not contain false positives.
3.  The frequency count using Count-Min Sketch can be either an underestimation or overestimation.
4.  The $\epsilon$-Dificient Synopsis guarantes no false positive.
5.  The space complexity of the sticky sampling algorithm has nothing to do with the total number of data items in the stream.

### Question 2

Consider the reservior sampling algorithm, given the sample size is $s$, the next arriving data $I$ is the $n$-th element, if $n>s$, then the probability to discard $I$ is: 1)$\frac{s}{n}$; 2) $\frac{s}{n-1}$; 3) $\frac{s-1}{n}$; 4) 1-$\frac{s}{n}$

### Question 3

Given a data stream, assume the ground truth frequent items are $\{a,b,c,d\}$, below are the outputs from three different algorithms. Which algorithm’s output is most desirable? Please explain.

-   Algorithm 1's output: $\{a,b,c\}$
-   Algorithm 2's output: $\{b,c,d,e,f\}$
-   Algorithm 3's output: $\{a,b,c,d,e,f,g\}$

### Question 4

Assume we have a stream of data items coming in the following order: $a,a,c,b,b,a,d,a,a,e$. Consider the Lossy Counting algorithm, let $s$=0.4 and $\epsilon$=0.2. What data element(s) remain in the storage after processing the first bucket? (Hint: bucket size $w=\lceil1/\epsilon\rceil$)

</details>
