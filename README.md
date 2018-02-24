react-responsive-creator
No compartido
Tipo
HTML
Tamaño
17 KB (17,734 bytes)
Almacenamiento usado
17 KB (17,734 bytes)
Ubicación
Mi unidad
Propietario
yo
Modificado el
01:43 por mí
Abierto el
01:43 por mí
Creado el
01:24 con StackEdit
Agregar descripción
Los lectores pueden descargar.
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-responsive-creator</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="react-responsive-creator">react-responsive-creator</h1>
<p>react-responsive-creator is a High order component, that recives the parent component and uses it as a container, the Desktop version and the Mobile version, it helps when the mobile and the desktop version are totally diferent and you need 2 differents components.</p>
<p><strong>NOTE:</strong> the breakpoint is <em>1024px</em></p>
<h1 id="getting-starter">Getting starter</h1>
<h2 id="install">Install</h2>
<pre><code>npm install react-responsive-creator
</code></pre>
<p>or</p>
<pre><code>yarn add react-responsive-creator
</code></pre>
<h2 id="usage">Usage</h2>
<p>You need the container component like this (in this example, we are going to use redux):</p>
<pre class=" language-javascript"><code class="prism  language-javascript">   <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span> <span class="token comment">//eslint-disable-line</span>
   <span class="token keyword">import</span> TestDesktop <span class="token keyword">from</span> <span class="token string">'./TestDesktop'</span>
   <span class="token keyword">import</span> TestMobile <span class="token keyword">from</span> <span class="token string">'./TestMobile'</span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span>withResponsive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-responsive-creator'</span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span>testAction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../actions/TestAction'</span>

   <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
   	<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">{</span>
   		<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
   		<span class="token keyword">this</span><span class="token punctuation">.</span>onSearch <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onSearch<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   	<span class="token punctuation">}</span>

   	<span class="token function">onSearch</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
   	<span class="token punctuation">}</span>

   	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       	<span class="token comment">/*This is important to show the 2 versions of the component */</span>
   		<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   	<span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">const</span> <span class="token function-variable function">mapState</span> <span class="token operator">=</span> state <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
   	test<span class="token punctuation">:</span>state<span class="token punctuation">.</span>test
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">const</span> <span class="token function-variable function">mapDisptach</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
   	testAction<span class="token punctuation">:</span> userAgent <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">testAction</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapState<span class="token punctuation">,</span>mapDisptach<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">withResponsive</span><span class="token punctuation">(</span>Test<span class="token punctuation">,</span>TestDesktop<span class="token punctuation">,</span>TestMobile<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>And the <code>TestDesktop.js</code> looks like:</p>
<pre class=" language-javascript"><code class="prism  language-javascript">    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span> <span class="token comment">//eslint-disable-line</span>

    <span class="token keyword">class</span> <span class="token class-name">TestDesktop</span>  <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">testAction</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//eslint-disable-line</span>
      <span class="token punctuation">}</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Desktop<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> TestDesktop<span class="token punctuation">;</span>
</code></pre>
<p>And the <code>TestMobile.js</code> looks like:</p>
<pre class=" language-javascript"><code class="prism  language-javascript">   <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span> <span class="token comment">//eslint-disable-line</span>

    <span class="token keyword">class</span> <span class="token class-name">TestMobile</span>  <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     	 <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">testAction</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//eslint-disable-line</span>
     	<span class="token punctuation">}</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Mobile<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>Test<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>REDUX<span class="token punctuation">:</span> <span class="token punctuation">{</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> TestMobile<span class="token punctuation">;</span>
</code></pre>
<p>Reducer and Action looks like:</p>
<pre class=" language-javascript"><code class="prism  language-javascript">    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">testAction</span> <span class="token operator">=</span> userAgent <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token punctuation">:</span> <span class="token string">'TEST'</span><span class="token punctuation">,</span>
      payload<span class="token punctuation">:</span>userAgent
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">'TEST'</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span> action<span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span> state<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> test<span class="token punctuation">;</span>
</code></pre>
<h2 id="props">Props</h2>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ParentComponent</td>
<td>The container that will be listening the window’s size changes and wher you can manage the redux conection</td>
</tr>
<tr>
<td>DesktopComponent</td>
<td>The desktop version of the component</td>
</tr>
<tr>
<td>MobileComponent</td>
<td>The Mobile version of the component</td>
</tr>
</tbody>
</table><h2 id="to-do">To Do</h2>
<ul>
<li>Add test</li>
<li>Pass extra methods to the children</li>
</ul>
</div>
</body>

</html>
