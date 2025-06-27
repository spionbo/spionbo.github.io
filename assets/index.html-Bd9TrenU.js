import{_ as a,c as n,b as e,o as i}from"./app-C3292AeO.js";const p="/assets/image-DgO9Z8wv.png",l={};function t(d,s){return i(),n("div",null,s[0]||(s[0]=[e('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Redis桌面管理器（又名RDM） - 是一个用于Windows，Linux和MacOS的快速开源Redis数据库管理应用程序。</p><p>该工具为您提供了一个易于使用的GUI，可以访问您的Redis数据库并执行一些基本操作：将键视为树，CRUD键，通过shell执行命令。</p><p>RDM支持SSL / TLS加密，SSH隧道，基于SSH隧道的TLS（带有In-Transit加密的AWS ElastiCache）和云Redis实例，例如：Amazon ElastiCache，Microsoft Azure Redis Cache和Redis Labs</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p><a href="https://pan.quark.cn/s/dfee2f17d1ef" target="_blank" rel="noopener noreferrer">RedisDesktopManager早期免费版</a></p><p>就只有一个文件，因为是早期的免费版，双击安装就可以打开了。</p><p><img src="'+p+`" alt="alt text"></p><h2 id="redis-教程" tabindex="-1"><a class="header-anchor" href="#redis-教程"><span>Redis 教程</span></a></h2><h4 id="键-key-操作命令" tabindex="-1"><a class="header-anchor" href="#键-key-操作命令"><span>键（Key）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>KEYS pattern          # 查找所有符合给定模式的键</span></span>
<span class="line"><span>EXISTS key            # 检查键是否存在</span></span>
<span class="line"><span>DEL key [key ...]     # 删除一个或多个键</span></span>
<span class="line"><span>EXPIRE key seconds    # 为键设置过期时间（秒）</span></span>
<span class="line"><span>TTL key               # 查看键的剩余过期时间</span></span>
<span class="line"><span>PERSIST key           # 移除键的过期时间</span></span>
<span class="line"><span>TYPE key              # 返回键所存储的值的类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="字符串-string-操作命令" tabindex="-1"><a class="header-anchor" href="#字符串-string-操作命令"><span>字符串（String）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>SET key value         # 设置键值对</span></span>
<span class="line"><span>GET key               # 获取键对应的值</span></span>
<span class="line"><span>GETSET key value      # 设置新值并返回旧值</span></span>
<span class="line"><span>INCR key              # 将键值递增1</span></span>
<span class="line"><span>DECR key              # 将键值递减1</span></span>
<span class="line"><span>INCRBY key increment  # 将键值增加指定的整数</span></span>
<span class="line"><span>DECRBY key decrement  # 将键值减少指定的整数</span></span>
<span class="line"><span>APPEND key value      # 在键值末尾追加内容</span></span>
<span class="line"><span>STRLEN key            # 返回键值的长度</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="哈希-hash-操作命令" tabindex="-1"><a class="header-anchor" href="#哈希-hash-操作命令"><span>哈希（Hash）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>HSET key field value  # 设置哈希表中的字段值</span></span>
<span class="line"><span>HGET key field        # 获取哈希表中指定字段的值</span></span>
<span class="line"><span>HMSET key field value [field value ...]  # 同时设置多个字段值</span></span>
<span class="line"><span>HMGET key field [field ...]  # 获取多个字段的值</span></span>
<span class="line"><span>HGETALL key           # 获取哈希表中所有字段和值</span></span>
<span class="line"><span>HKEYS key             # 获取哈希表中所有字段</span></span>
<span class="line"><span>HVALS key             # 获取哈希表中所有值</span></span>
<span class="line"><span>HLEN key              # 获取哈希表中字段的数量</span></span>
<span class="line"><span>HDEL key field [field ...]  # 删除哈希表中的一个或多个字段</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="列表-list-操作命令" tabindex="-1"><a class="header-anchor" href="#列表-list-操作命令"><span>列表（List）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>LPUSH key value [value ...]  # 在列表左侧插入一个或多个值</span></span>
<span class="line"><span>RPUSH key value [value ...]  # 在列表右侧插入一个或多个值</span></span>
<span class="line"><span>LPOP key                      # 从列表左侧弹出一个值</span></span>
<span class="line"><span>RPOP key                      # 从列表右侧弹出一个值</span></span>
<span class="line"><span>LLEN key                      # 获取列表长度</span></span>
<span class="line"><span>LRANGE key start stop         # 获取列表指定范围内的元素</span></span>
<span class="line"><span>LTRIM key start stop          # 只保留列表指定范围内的元素</span></span>
<span class="line"><span>LINDEX key index              # 通过索引获取列表中的元素</span></span>
<span class="line"><span>LSET key index value          # 通过索引设置列表元素的值</span></span>
<span class="line"><span>LREM key count value          # 移除列表中指定值的元素</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="集合-set-操作命令" tabindex="-1"><a class="header-anchor" href="#集合-set-操作命令"><span>集合（Set）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>SADD key member [member ...]  # 向集合添加一个或多个成员</span></span>
<span class="line"><span>SREM key member [member ...]  # 移除集合中一个或多个成员</span></span>
<span class="line"><span>SMEMBERS key                  # 获取集合中所有成员</span></span>
<span class="line"><span>SISMEMBER key member          # 判断成员是否在集合中</span></span>
<span class="line"><span>SCARD key                     # 获取集合中成员的数量</span></span>
<span class="line"><span>SPOP key [count]              # 随机弹出一个或多个成员</span></span>
<span class="line"><span>SRANDMEMBER key [count]       # 随机获取一个或多个成员</span></span>
<span class="line"><span>SUNION key [key ...]          # 返回多个集合的并集</span></span>
<span class="line"><span>SINTER key [key ...]          # 返回多个集合的交集</span></span>
<span class="line"><span>SDIFF key [key ...]           # 返回多个集合的差集</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="有序集合-sorted-set-操作命令" tabindex="-1"><a class="header-anchor" href="#有序集合-sorted-set-操作命令"><span>有序集合（Sorted Set）操作命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>ZADD key score member [score member ...]  # 向有序集合添加一个或多个成员</span></span>
<span class="line"><span>ZREM key member [member ...]  # 移除有序集合中一个或多个成员</span></span>
<span class="line"><span>ZRANGE key start stop [WITHSCORES]  # 获取有序集合指定范围内的成员</span></span>
<span class="line"><span>ZREVRANGE key start stop [WITHSCORES]  # 获取有序集合指定范围内的成员（降序）</span></span>
<span class="line"><span>ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]  # 根据分数范围获取成员</span></span>
<span class="line"><span>ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]  # 根据分数范围获取成员（降序）</span></span>
<span class="line"><span>ZCARD key                     # 获取有序集合成员数量</span></span>
<span class="line"><span>ZSCORE key member             # 获取有序集合成员的分数</span></span>
<span class="line"><span>ZINCRBY key increment member  # 增加有序集合成员的分数</span></span>
<span class="line"><span>ZRANK key member              # 获取有序集合成员的排名（升序）</span></span>
<span class="line"><span>ZREVRANK key member           # 获取有序集合成员的排名（降序）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="发布-订阅-pub-sub-命令" tabindex="-1"><a class="header-anchor" href="#发布-订阅-pub-sub-命令"><span>发布/订阅（Pub/Sub）命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>PUBLISH channel message       # 发布消息到指定频道</span></span>
<span class="line"><span>SUBSCRIBE channel [channel ...]  # 订阅一个或多个频道</span></span>
<span class="line"><span>UNSUBSCRIBE [channel [channel ...]]  # 取消订阅一个或多个频道</span></span>
<span class="line"><span>PSUBSCRIBE pattern [pattern ...]  # 订阅符合指定模式的频道</span></span>
<span class="line"><span>PUNSUBSCRIBE [pattern [pattern ...]]  # 取消订阅符合指定模式的频道</span></span>
<span class="line"><span>PUBSUB subcommand [argument [argument ...]]  # 查看发布/订阅系统状态</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="事务命令" tabindex="-1"><a class="header-anchor" href="#事务命令"><span>事务命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>MULTI                   # 标记一个事务块的开始</span></span>
<span class="line"><span>EXEC                    # 执行所有事务块内的命令</span></span>
<span class="line"><span>DISCARD                 # 取消事务，放弃执行事务块内的所有命令</span></span>
<span class="line"><span>WATCH key [key ...]     # 监视一个或多个键，若在事务执行前被修改，事务将被打断</span></span>
<span class="line"><span>UNWATCH                 # 取消 WATCH 命令对所有键的监视</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="服务器命令" tabindex="-1"><a class="header-anchor" href="#服务器命令"><span>服务器命令</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>PING                    # 测试连接是否存活</span></span>
<span class="line"><span>INFO [section]          # 获取服务器信息</span></span>
<span class="line"><span>CONFIG GET parameter    # 获取服务器配置参数</span></span>
<span class="line"><span>CONFIG SET parameter value  # 设置服务器配置参数</span></span>
<span class="line"><span>FLUSHDB                 # 删除当前数据库中的所有键</span></span>
<span class="line"><span>FLUSHALL                # 删除所有数据库中的所有键</span></span>
<span class="line"><span>SHUTDOWN [NOSAVE] [SAVE]  # 关闭服务器</span></span>
<span class="line"><span>BGSAVE                  # 异步保存数据到磁盘</span></span>
<span class="line"><span>SAVE                    # 同步保存数据到磁盘</span></span>
<span class="line"><span>LASTSAVE                # 获取最后一次成功将数据保存到磁盘的时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,27)]))}const c=a(l,[["render",t]]),h=JSON.parse('{"path":"/article/vd4kns7r/","title":"RedisDesktopManager早期免费版","lang":"zh-CN","frontmatter":{"title":"RedisDesktopManager早期免费版","createTime":"2025/06/23 17:07:45","permalink":"/article/vd4kns7r/","tags":["Redis","RedisDesktopManager"]},"readingTime":{"minutes":4.37,"words":1311},"git":{"createdTime":1751005277000,"updatedTime":1751005277000,"contributors":[{"name":"彭波","username":"","email":"pengbo23812@talkweb.com.cn","commits":1,"avatar":"https://gravatar.com/avatar/39a6728bd51b7093cb4ac3a6cc495e672bc2bed6e9a7fe1cc7a4fbe51ae22c6c?d=retro"}]},"filePathRelative":"software/程序员/RedisDesktopManager早期免费版/RedisDesktopManager早期免费版.md","headers":[],"categoryList":[{"id":"f9fa10","sort":10000,"name":"software"},{"id":"8718f9","sort":10022,"name":"程序员"},{"id":"452b94","sort":10033,"name":"RedisDesktopManager早期免费版"}]}');export{c as comp,h as data};
