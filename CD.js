const companiesData = [
    {
      name: "Facebook",
      stack: [
        "React", "Node.js", "GraphQL", "MySQL", "JavaScript", "Hack", "Redux", "React Native",
        "Jest", "Flow", "Apache Thrift", "Presto", "Apache HBase", "Zookeeper", "Memcached", "Apache Kafka"
      ]
    },
    {
      name: "Google",
      stack: [
        "Angular", "Golang", "Java", "C++", "Bigtable", "TensorFlow", "Firebase", "Kubernetes",
        "Google Cloud Platform (GCP)", "Jupyter Notebooks", "Googler", "Bash", "MySQL", "Spanner", "Protocol Buffers"
      ]
    },
    {
      name: "Netflix",
      stack: [
        "React", "Node.js", "Java", "Spring Boot", "Redis", "AWS", "MongoDB", "Python", "PostgreSQL",
        "GraphQL", "Apache Kafka", "Zookeeper", "Elasticsearch", "Hadoop", "Amazon RDS"
      ]
    },
    {
      name: "Uber",
      stack: [
        "Node.js", "React", "Java", "Python", "MySQL", "PostgreSQL", "Kafka", "AWS", "Go", "Cassandra",
        "Redis", "Google BigQuery", "Docker", "Kubernetes", "GraphQL"
      ]
    },
    {
      name: "Spotify",
      stack: [
        "React", "Node.js", "Golang", "Python", "AWS", "PostgreSQL", "Apache Kafka", "Redis", "Docker",
        "Kubernetes", "Terraform", "Helm", "Prometheus", "Grafana"
      ]
    },
    {
      name: "Twitter",
      stack: [
        "Scala", "Ruby on Rails", "MySQL", "PostgreSQL", "Kafka", "Redis", "Java", "React", "Elasticsearch",
        "Memcached", "Cassandra", "Kubernetes", "Apache Hadoop", "Spring Boot"
      ]
    },
    {
      name: "Airbnb",
      stack: [
        "React", "Ruby on Rails", "Node.js", "PostgreSQL", "GraphQL", "Redux", "React Native", "MySQL",
        "Kubernetes", "Docker", "Elasticsearch", "Kafka", "AWS", "S3", "Terraform"
      ]
    },
    {
      name: "GitHub",
      stack: [
        "Ruby on Rails", "React", "Node.js", "PostgreSQL", "MySQL", "Redis", "Go", "AWS", "Kubernetes",
        "Docker", "Jenkins", "Elasticsearch", "GraphQL", "Clojure", "AngularJS"
      ]
    },
    {
      name: "LinkedIn",
      stack: [
        "Java", "Scala", "Apache Kafka", "Hadoop", "MySQL", "React", "Apache Lucene", "Elasticsearch",
        "Voldemort", "Apache HBase", "Zookeeper", "AWS", "Docker", "Spring Boot", "Akka"
      ]
    },
    {
      name: "Slack",
      stack: [
        "JavaScript", "React", "Node.js", "Java", "MySQL", "PostgreSQL", "AWS", "Redis", "Elasticsearch",
        "Apache Kafka", "Docker", "GraphQL", "RabbitMQ", "Kubernetes"
      ]
    },
    {
      name: "Amazon",
      stack: [
        "Java", "AWS", "Ruby on Rails", "React", "Node.js", "PostgreSQL", "DynamoDB", "ElasticSearch", 
        "S3", "Lambda", "ECS", "EKS", "SNS", "SQS", "API Gateway", "CloudWatch", "Elastic Beanstalk"
      ]
    },
    {
      name: "Microsoft",
      stack: [
        "C#", "Azure", ".NET", "SQL Server", "JavaScript", "React", "Node.js", "Angular", "Power BI",
        "PowerShell", "SharePoint", "Xamarin", "SignalR", "SQL Server", "Windows Server", "Docker", "Kubernetes"
      ]
    },
    {
      name: "Pinterest",
      stack: [
        "Python", "Django", "React", "Node.js", "Redis", "PostgreSQL", "Kafka", "AWS", "Java", "MySQL",
        "Elasticsearch", "GraphQL", "Docker", "Kubernetes", "Apache Kafka"
      ]
    },
    {
      name: "Shopify",
      stack: [
        "Ruby on Rails", "React", "GraphQL", "Node.js", "MySQL", "Redis", "Kubernetes", "React Native",
        "GraphQL", "Docker", "Terraform", "AWS", "PostgreSQL"
      ]
    },
    {
      name: "Snapchat",
      stack: [
        "React", "Node.js", "Python", "Go", "Redis", "MySQL", "AWS", "Kafka", "Google Cloud", "Cassandra",
        "Docker", "Kubernetes", "Elasticsearch"
      ]
    },
    {
      name: "Dropbox",
      stack: [
        "Python", "Django", "React", "Go", "PostgreSQL", "MySQL", "AWS", "MongoDB", "Cassandra",
        "Redis", "Kubernetes", "Terraform", "Helm", "GraphQL"
      ]
    },
    {
      name: "Snap Inc.",
      stack: [
        "React", "Python", "Node.js", "Go", "AWS", "Redis", "MySQL", "Apache Kafka", "Docker", "Kubernetes"
      ]
    },
    {
      name: "Reddit",
      stack: [
        "Python", "Django", "React", "Node.js", "PostgreSQL", "Redis", "AWS", "React Native", "Go", "Docker"
      ]
    },
    {
      name: "Zynga",
      stack: [
        "Java", "Ruby on Rails", "React", "Node.js", "Redis", "PostgreSQL", "AWS", "Cassandra", "ElasticSearch"
      ]
    },
    {
      name: "WhatsApp",
      stack: [
        "Erlang", "React", "Node.js", "MySQL", "FreeBSD", "Java", "C++", "Android", "iOS", "AWS"
      ]
    },
    {
      name: "Instagram",
      stack: [
        "Python", "Django", "React", "Node.js", "Redis", "MySQL", "AWS", "ElasticSearch", "GraphQL", "Kubernetes"
      ]
    },
    {
      name: "Yahoo",
      stack: [
        "Node.js", "React", "Java", "PHP", "Hadoop", "YQL", "Redis", "MySQL", "Cassandra", "ElasticSearch"
      ]
    },
    {
      name: "Atlassian (Jira, Trello)",
      stack: [
        "Java", "Node.js", "React", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "GraphQL"
      ]
    },
    {
      name: "Adobe",
      stack: [
        "Java", "React", "Node.js", "C++", "AWS", "Redis", "JavaScript", "PostgreSQL", "Kubernetes", "Elasticsearch"
      ]
    },
    {
      name: "Salesforce",
      stack: [
        "Apex", "JavaScript", "React", "Node.js", "Heroku", "AWS", "MySQL", "PostgreSQL", "Salesforce Platform"
      ]
    },
    {
      name: "PayPal",
      stack: [
        "Java", "Node.js", "React", "MongoDB", "MySQL", "Docker", "AWS", "Redis", "GraphQL", "Kubernetes"
      ]
    },
    {
      name: "Walmart",
      stack: [
        "Java", "React", "Node.js", "MongoDB", "AWS", "Python", "Kubernetes", "Docker", "GraphQL", "ElasticSearch"
      ]
    },
    {
      name: "Oracle",
      stack: [
        "Java", "Oracle DB", "React", "Node.js", "Kubernetes", "AWS", "Docker", "SQL", "ElasticSearch"
      ]
    },
    {
      name: "Square",
      stack: [
        "Ruby on Rails", "React", "Node.js", "PostgreSQL", "Java", "AWS", "Redis", "Kubernetes", "Docker"
      ]
    },
    {
      name: "Vimeo",
      stack: [
        "PHP", "React", "Node.js", "MySQL", "Redis", "Amazon S3", "AWS", "ElasticSearch", "Docker"
      ]
    },
    {
      name: "GitLab",
      stack: [
        "Ruby on Rails", "React", "Node.js", "PostgreSQL", "MySQL", "Redis", "Golang", "AWS", "Docker", "Kubernetes"
      ]
    },
    {
      name: "Braintree (PayPal)",
      stack: [
        "Ruby on Rails", "React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "GraphQL", "Elasticsearch"
      ]
    },
    {
      name: "Twitch",
      stack: [
        "Go", "Python", "Node.js", "React", "MySQL", "Redis", "AWS", "Docker", "Kubernetes", "Apache Kafka"
      ]
    },
    {
      name: "TikTok",
      stack: [
        "Go", "Python", "Java", "React", "PostgreSQL", "AWS", "Redis", "Kafka", "ElasticSearch", "Docker"
      ]
    }
  ];
  