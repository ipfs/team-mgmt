# IPLD refining call #2

In the meeting: @nicola, @stebalien

In this call we discussed:

- Relative paths [#1](https://github.com/ipld/specs/issues/1)
  1. Relative paths only exist in the object
    - **Why?** Hash certification breaks, paths can become unresolvable, cannot create absolute resolvable paths.
    - See [Intra-Object relative links](#Intra-Object_relative_links)
  2. Relative paths must not form cycles
    - **Why?** See [Cycles](#Cycles)
  3. There are other ways to form cycles
    - See [Application Level Cycles](#Application-level_cycles)

--

## Terminology

- Block - a chunk of raw data
- Object - an IPLD object
- Node - a node in the "graph" encoded in an IPLD object.
- Graph - a DAG of IPLD objects.
- Canonicalize: Apply some function f to a path such that `f(path1) == f(path2)` for all path1 and path2 if and only if they point to the same object.

---

## Resolutions

### Cycles

Do we let relative links introduce cycles?

#### Conclusion

No.

#### Pro

- Parent Links ("..").
- Bidirectional links.

However, these can also be done at the application level (see below).

#### Cons

- Harder for applications to traverse the graph.
- In the case of inter-object links, a single block can be multiple logical "objects" depending on the path used to access it.

--

### Intra-Object relative links

Do we allow relative links within an object?

#### Conclusion

Yes.

#### Pros

Without internal non-cyclic relative links, one would need to break an object into a graph in some cases. For example, given:

```
  a
 / \
v   v
b-->c
```

With internal non-cyclic relative links, we can express the `b -> c` link as `../c`. If we didn't allow these links, `c` would need to be a separate object.

#### Cons

We should probably have a validation step that checks for cycles/invalid links. This is also one more feature to implement.

#### Alternatives

When writing this up, I realized that there is an alternative (besides do nothing). Specifically, we could allow some form of nameable sub-object. However, I feel that this is even more complicated and probably a bad idea.

--

### Inter-Object Relative Links

Should we allow relative links to traverse up through a parent.

#### Conclusion

No.

#### Pros

- With cycles, this would allow cross-object bidirectional links/parent links. However, we don't want cycles.

- Without cycles, this would allow one to create a link from a child object to a non-ancestor node in a parent object. This is the cross-object variant of the motivation for intra-object links. However, we're already dealing with multiple objects here so I find this argument less convincing.

#### Cons

- The value of an object would depend on the path used to reach it; there would be no one-to-one mapping of blocks to objects.

- As a consequence of this, objects would no longer have "canonical" paths. This would make, e.g., comparing objects significantly more difficult.

---

## Unresolved Questions

When writing this up, I came across a few unresolved questions.

### Inter-object relative links that don't traverse parents

What about inter-object relative links that never only traverse to child objects? These links would have a verifiable one-to-one mapping to absolute links (as in, they could be trivially replaced with absolute links). We could canonicalize all links when encoding an object but then we might lose some semantic information. This leads into the second question.

### Canonicalizing Links

Do we canonicalize all links regardless? Do we just make this an optional feature (leave the choice up to the implementation)? This would throw away some semantic information and may not always be possible (e.g., if you don't have a copy of the intermediate objects). However, this would make fetching objects faster.

---

## Application-level cycles

There are (at least) two ways to do application level cycles.

### Adjacency List

Distribute a supplementary adjacency list to overlay the object. That is, one can write:

```
{
    this: { /* ... */ },
    overlay: {
        "a/b/c": "a/b", // A parent link
    }
}
```

### Twin-Node

Use two nodes instead of one — one for out-links, one for in-links — and construct the logical graph at the application level. That is, given a graph such as:

![](https://cloud.githubusercontent.com/assets/310393/18489284/edaa7854-79ca-11e6-9ffd-6dc629b4c9fa.png)

The application would produce:

![](https://cloud.githubusercontent.com/assets/310393/18488725/ae5d0362-79c8-11e6-98d3-ce0f3cf6cf4b.png)

In the above graphs, `G` "lists" all nodes in the graph where each node is actually two nodes: one that points to other nodes and one that is pointed to by other nodes.
