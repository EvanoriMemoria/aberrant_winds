---
title: 'ComputerCraft Minecolonies Refined Storage Program'
date: 2021-08-07
author: 'fergenbergel'
type: 'post'
tags: 
 - post
 - minecraft
 - valhelsia 3
 - program
 - lua
---

## Outdated as of update 3.4.2

Take a look at the source code here: [Program Pastebin][1]

This is a program for ComputerCraft which enables integration between your Minecolony and your Refined Storage system. This program uses a list of your builder huts to find the items they need for their current project, find and output those items from your Refined Storage and craft them using patterns in your system if you do not have enough in storage. 

#### Purpose

While growing my Minecolonies colony I would spend extended periods of time looking at each builder's list of blocks needed and finding them in my Refined Storage, this program makes it such that there are only a few items I have to manually find or craft and can spend more time planning my city or playing the game, rather than standing around finding these builders all their items.

#### Program Setup

To get started just download the program to your ComputerCraft machine using the following command.

```
pastebin get gMJhwSwW itemProcurement.lua
```

then to modify the file for your builder huts we need to look at the lines where items_needed_name are assigned.

```lua
6 items_needed_jade = colony.getBuilderResources({x=227, y=69, z=-2291})
7 items_needed_ayleen = colony.getBuilderResources({x=220, y=64, z=-2315})
8 items_needed_billy = colony.getBuilderResources({x=346, y=64, z=-2305})
9 items_needed = {items_needed_jade, items_needed_ayleen, items_needed_billy}
```

If you have more or less builders than the three this program assumes then you can delete the extra items_needed_billy and items_needed_ayleen lines, or add more. Additionally, you will need to find the coordinates of the builder hut blocks and replace the defaults with your coordinates, they should be shown in the top right under your map when standing on the builder's hut block. Then just take the items_needed table and add or delete the items_needed_variables so they are all included.

#### Output Chest Setup
By default I have configured for there to be three different output chests connected to the Refined Storage peripheral, one on each side facing north, up, and west as can be seen in the following lines:

```lua
        --Calculate Output Side based on building.
        if i == 1 then 
            output_side = "up"
        elseif i == 2 then 
            output_side = "north"
        elseif i == 3 then 
            output_side = "west"
        else 
            output_side = "north"
        end
```

You can place chests on these sides of the block as well or modify them to be on the side you prefer. If you added any additional builder's huts you may want to add another chest for each additional building. If you have more than four builder's huts you can always set up another computer with the same program and different coordinates.

#### Run Program
Lastly, you will just need to run the program using the command

```
itemProcurement
```

If set up correctly all items currently needed by the builders will be output to their respective chests for easy distribution. 

Take a look at the source code here: [Program Pastebin][1]

[1]: <https://pastebin.com/gMJhwSwW> "Program Pastebin"
