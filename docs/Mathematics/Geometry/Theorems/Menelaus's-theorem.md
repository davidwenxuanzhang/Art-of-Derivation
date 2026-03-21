---
title: Menelaus's Theorem
sidebar_label: Menelaus's Theorem
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';


# Menelaus's Theorem

:::tip Menelaus's Theorem

<div className="deriv2col">

  <div>
    <img src={useBaseUrl('/img/Menelaus-Theorem.png')} width="375" />
  </div>

  <div>
    Menelaus's theorem is named for Greek Mathematician **Menelaus of Alexandria** that said: given a line and a $\triangle ABC$, if the line cross through the sides of $\triangle ABC$ $AB$, $AC$, and $BC$ or their extension at point $L$, $M$, and $N$ as shown in graph, then: 

$$
    \frac{\overline{AM}}{\overline{MB}}\cdot \frac{\overline{BL}}{\overline{LC}} \cdot  \frac{\overline{CN}}{\overline{NA}}=1
$$


    where $\overline{AM}$ represents the length of segment $AM$
  </div>

</div>
<br/>
<details>
<summary><span className="math-keyword">Derivation</span></summary>

<span className="math-keyword">Derivation 1</span>: *Areas*

<div className="deriv2col" style={{ gridTemplateColumns: "300px 1fr", gap: "3rem" }}>

  <div>
    <img src={useBaseUrl('/img/Menelaus-Theorem-Derivation1.png')} width="300" />
  </div>

  <div>
Connect $AL$, as shown on the left. 

Since there are some triangles share the same base and altitude: 
$$
        \frac{\overline{AM}}{\overline{MB}}=\frac{[\triangle ALM]}{[\triangle BLM]}, 
        \frac{\overline{BL}}{\overline{LC}}=\frac{[\triangle BLM]}{[\triangle CLM]}, 
        \frac{\overline{CN}}{\overline{NA}}=\frac{[\triangle CLM]}{[\triangle ALM]}
$$
Hence: 

$$
     \frac{\overline{AM}}{\overline{MB}}\cdot \frac{\overline{BL}}{\overline{LC}} \cdot  \frac{\overline{CN}}{\overline{NA}}=\frac{[\triangle ALM]}{[\triangle BLM]}\cdot \frac{[\triangle BLM]}{[\triangle CLM]} \cdot \frac{[\triangle CLM]}{[\triangle ALM]}
    =1 \tag*{$\blacksquare$}
$$
<p align="right">
*Note: $[\triangle AOD]$ represents the area of $\triangle AOD$*
</p>
  </div>

</div>
<hr />

<span className="math-keyword">Derivation 2</span>: *Trigonometry*
<div className="deriv2col" style={{ gridTemplateColumns: "300px 1fr", gap: "3rem" }}>

  <div>
    <img src={useBaseUrl('/img/Menelaus-Theorem-Derivation2.png')} width="300" />
  </div>

  <div>
Let $\angle AMN=\angle BML=\alpha$, $\angle ANM=\beta$, $\angle BLM=\gamma$.

According to the Law of Sines, in $\triangle AMN$: 
$$
\frac{\overline{NA}}{\sin{\alpha}}=\frac{{\overline{AM}}}{\sin{\beta}} \implies \frac{\overline{AM}}{\overline{NA}}= \frac{\sin{\beta}}{\sin{\alpha}}
$$
Similarly, in $\triangle{BLM}$ and $\triangle{CLM}$, we get: 
$$
\frac{\overline{BL}}{\overline{MB}}= \frac{\sin{\alpha}}{\sin{\gamma}},\  \frac{\overline{CN}}{\overline{LC}}= \frac{\sin{\gamma}}{\sin{(180\degree-\beta)}}= \frac{\sin{\gamma}}{\sin{\beta}}
$$
  </div>

</div>
Hence: 
$$
\frac{\overline{AM}}{\overline{MB}}\cdot \frac{\overline{BL}}{\overline{LC}} \cdot  \frac{\overline{CN}}{\overline{NA}}= \frac{\overline{AM}}{\overline{NA}}\cdot \frac{\overline{BL}}{\overline{MB}}\cdot \frac{\overline{CN}}{\overline{LC}}= \frac{\sin{\beta}}{\sin{\alpha}}\cdot \frac{\sin{\alpha}}{\sin{\gamma}} \cdot \frac{\sin{\gamma}}{\sin{\beta}}=1  \tag*{$\blacksquare$}
$$

</details>
:::

## Examples