<h2>14. Longest Common Prefix</h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lower-case English letters.</li>
</ul>
</div>

<hr>
<h2>💡 My Idea is...</h2>
<ol>
    <li>Sort the array of strings into alphabetical order.</li>
    <li>The first character of <code>the first element</code> and <code>the last element</code> is checked to see if they are the same, if so, it becomes the longest common prefix string amongst the array of strings.</li>
    <li>The next character in the first and last element is checked until they are no longer the same.</li>
    <li>The longest common prefix string amongst the array of strings is output.</li>
</ol>