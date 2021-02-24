Input::
//// [/user/username/projects/myproject/projets/project1/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"exclude":["temp"]}

//// [/user/username/projects/myproject/projets/project1/class1.ts]
class class1 {}

//// [/user/username/projects/myproject/projets/project2/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"references":[{"path":"../project1"}]}

//// [/user/username/projects/myproject/projets/project2/class2.ts]
class class2 {}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js --w -p /user/username/projects/myproject/projets/project2/tsconfig.json --extendedDiagnostics
Output::

12:00:31 AM - Starting compilation in watch mode...

Current directory: / CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projets/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projets/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projets/project1","originalPath":"../project1"}]
Loading config file: /user/username/projects/myproject/projets/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project1/tsconfig.json 2000 undefined Config file of referened project
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project1/class1.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2/class2.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots

12:00:38 AM - Found 0 errors. Watching for file changes.
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project2 1 undefined Wild card directory


Program root files: ["/user/username/projects/myproject/projets/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projets/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project2/class2.ts

WatchedFiles::
/user/username/projects/myproject/projets/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/class1.ts:
  {"fileName":"/user/username/projects/myproject/projets/project1/class1.ts","pollingInterval":250}
/user/username/projects/myproject/projets/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projets/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projets/project1:
  {"directoryName":"/user/username/projects/myproject/projets/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2:
  {"directoryName":"/user/username/projects/myproject/projets/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projets/project2/class2.js]
var class2 = /** @class */ (function () {
    function class2() {
    }
    return class2;
}());


//// [/user/username/projects/myproject/projets/project2/class2.d.ts]
declare class class2 {
}


//// [/user/username/projects/myproject/projets/project2/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.ts": {
        "version": "777933178-class class1 {}",
        "signature": "-2723220098-declare class class1 {\n}\n",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "module": 0,
      "composite": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.ts",
      "./class2.ts"
    ]
  },
  "version": "FakeTSVersion"
}


Change:: Add class3 to project1

Input::
//// [/user/username/projects/myproject/projets/project1/class3.ts]
class class3 {}


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project

12:00:41 AM - File change detected. Starting incremental compilation...

Synchronizing program
Loading config file: /user/username/projects/myproject/projets/project1/tsconfig.json
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projets/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projets/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projets/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projets/project1/class3.ts 250 undefined Source file

12:00:51 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/projets/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projets/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project1/class3.ts
/user/username/projects/myproject/projets/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project1/class3.ts
/user/username/projects/myproject/projets/project2/class2.ts

WatchedFiles::
/user/username/projects/myproject/projets/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/class1.ts:
  {"fileName":"/user/username/projects/myproject/projets/project1/class1.ts","pollingInterval":250}
/user/username/projects/myproject/projets/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projets/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projets/project1/class3.ts:
  {"fileName":"/user/username/projects/myproject/projets/project1/class3.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projets/project1:
  {"directoryName":"/user/username/projects/myproject/projets/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2:
  {"directoryName":"/user/username/projects/myproject/projets/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projets/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projets/project2/class2.d.ts] file written with same contents
//// [/user/username/projects/myproject/projets/project2/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.ts": {
        "version": "777933178-class class1 {}",
        "signature": "-2723220098-declare class class1 {\n}\n",
        "affectsGlobalScope": true
      },
      "../project1/class3.ts": {
        "version": "778005052-class class3 {}",
        "signature": "-2644949312-declare class class3 {\n}\n",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "module": 0,
      "composite": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.ts",
      "../project1/class3.ts",
      "./class2.ts"
    ]
  },
  "version": "FakeTSVersion"
}


Change:: Add excluded file to project1

Input::
//// [/user/username/projects/myproject/projets/project1/temp/file.d.ts]
declare class file {}


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/temp :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projets/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projets/project1/temp
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/temp :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projets/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projets/project1/temp/file.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projets/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projets/project1 1 undefined Wild card directory of referenced project


Program root files: ["/user/username/projects/myproject/projets/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projets/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project1/class3.ts
/user/username/projects/myproject/projets/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projets/project1/class1.ts
/user/username/projects/myproject/projets/project1/class3.ts
/user/username/projects/myproject/projets/project2/class2.ts

WatchedFiles::
/user/username/projects/myproject/projets/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projets/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projets/project1/class1.ts:
  {"fileName":"/user/username/projects/myproject/projets/project1/class1.ts","pollingInterval":250}
/user/username/projects/myproject/projets/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projets/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projets/project1/class3.ts:
  {"fileName":"/user/username/projects/myproject/projets/project1/class3.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projets/project1:
  {"directoryName":"/user/username/projects/myproject/projets/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projets/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projets/project2:
  {"directoryName":"/user/username/projects/myproject/projets/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

